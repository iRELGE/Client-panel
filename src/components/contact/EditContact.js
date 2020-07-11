import React, { Component } from 'react';
import {Consumer} from '../context';
import TextinputGroup from '../helpers/TextinputGroup'
import axios from 'axios';


 class EditContact extends Component {
    state={
        
         name:'',
         email:'',
         phone:'',
         errors:{}

        }
        
       async componentDidMount()
        {
            
            const id=this.props.match.params.id
            try{
               const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
               const{name,email,phone,error}=res.data
               this.setState({
                   
                   name,
                   email,
                   phone,
                   error
                   
               })
               console.log(this.state.state)
            }catch(e)
            {
                console.error(e);
            }
        }
        onChangeInput=(e)=>this.setState({[e.target.name]:e.target.value})
        submit=async (dispatch,size,e)=>{
           
            
            e.preventDefault();
            const id=this.props.match.params.id
           const {name,email,phone}=this.state;
            if(name==="")
            {
                this.setState({errors:{name:"name is requiered!"}})
                return;
            }
            if(email==="")
            {
                this.setState({errors:{email:"email is requiered!"}})
                return;
            }
            if(phone==="")
            {
                this.setState({errors:{phone:"phone is requiered!"}})
                return;
            }
            const upContact={
                id,
                name,
                email,
                phone

            }
            try{
           const res= await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,upContact)
           dispatch(
            {
                type:"UPDATE_CONTACT",
                payload:res.data
            } )
            this.setState({
                id,
               name:'',
                email:'',
                phone:'',
                errors:{}

                
            })
            this.props.history.push('/');
            
        }
            catch(e){
                console.log(e)
            }
        }
    render() {
        const{name,email,phone,errors}=this.state;
        return(
            <Consumer>
                {value=>{
                    const {dispatch}=value;
                    
                    return (

                        <div>
                            <form onSubmit={this.submit.bind(this,dispatch,value.contacts.length)}>
                            <div className="card">
                             
                               <div className="card-body">
                                   <h4 className="card-title">Edit Contact</h4>
                                   <div className="card-text">
                                <TextinputGroup 
                                    label="Name" 
                                    type="text"
                                    name="name" 
                                    value={name} 
                                    onChange={this.onChangeInput}
                                    error={errors.name}
                                />
                                <TextinputGroup 
                                    label="Email" 
                                    type="email"
                                    name="email" 
                                    value={email} 
                                    onChange={this.onChangeInput}
                                    error={errors.email}
                                />
                                <TextinputGroup 
                                    label="Phone" 
                                    type="text"
                                    name="phone" 
                                    value={phone} 
                                    onChange={this.onChangeInput}
                                    error={errors.phone}
                                />
                                        <button className="btn btn-danger btn-block">Update Contact</button>
                                   </div>
                               </div>
                           </div>
                           </form>
                            
                        </div>
                    )

                }}
            </Consumer>
        )

        
    }
}
export default EditContact;
