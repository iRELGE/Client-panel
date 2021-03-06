import React, { Component } from 'react';
import {Consumer} from '../context';
import TextinputGroup from '../helpers/TextinputGroup'
import axios from 'axios';


 class AddContact extends Component {
    state={
         name:'',
         email:'',
         phone:'',
         errors:{}

        }
        onChangeInput=(e)=>this.setState({[e.target.name]:e.target.value})
        submit=async (dispatch,size,e)=>{
           
            
            e.preventDefault();
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
            const newContact={
                name,
                email,
                phone

            }
            try{
           const res= await axios.post('https://jsonplaceholder.typicode.com/users',newContact)
           dispatch(
            {
                type:"ADD_CONTACT",
                payload:res.data
            } )
            this.setState({
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
                                   <h4 className="card-title">Add Contact</h4>
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
                                        <button className="btn btn-success btn-block">Add New Contact</button>
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
export default AddContact;
