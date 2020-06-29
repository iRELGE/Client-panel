import React, { Component } from 'react';
import {Consumer} from '../context';
import TextinputGroup from '../helpers/TextinputGroup'


 class AddContact extends Component {
    state={
         name:'',
         email:'',
         phone:'',
         errors:{}

        }
        onChangeInput=(e)=>this.setState({[e.target.name]:e.target.value})
        submit=(dispatch,size,e)=>{
           
            
            e.preventDefault();
           const {name,email,phone}=this.state;
            if(name=="")
            {
                this.setState({errors:{name:"name is requiered!"}})
                return;
            }
            if(email=="")
            {
                this.setState({errors:{email:"email is requiered!"}})
                return;
            }
            if(phone=="")
            {
                this.setState({errors:{phone:"phone is requiered!"}})
                return;
            }
            dispatch(
                {
                    type:"ADD_CONTACT",
                    payload:{
                        // id:size+1,
                        // name:name,
                        // email:email,
                        // phone:phone
                        id:size+1,
                        name,
                        email,
                        phone
                    }

                } 
            )
            this.setState({
               name:'',
                email:'',
                phone:'',
                errors:{}

                
            })
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
