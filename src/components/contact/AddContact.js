import React, { Component } from 'react';
import {Consumer} from '../context';
import TextinputGroup from '../helpers/TextinputGroup'


 class AddContact extends Component {
    state={
         name:'',
         email:'',
         phone:''

        }
        onChangeInput=(e)=>this.setState({[e.target.name]:e.target.value})
        submit=(dispatch,size,e)=>{
           
            
            e.preventDefault();
            dispatch(
                {
                    type:"ADD_CONTACT",
                    payload:{
                        id:size+1,
                        name:this.state.name,
                        email:this.state.email,
                        tel:this.state.phone
                    }

                }
            )
            this.setState({
                name:'',
                email:'',
                phone:''
            })
        }
    render() {
        const{name,email,phone}=this.state;
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
                                />
                                <TextinputGroup 
                                    label="Email" 
                                    type="email"
                                    name="email" 
                                    value={email} 
                                    onChange={this.onChangeInput}
                                />
                                <TextinputGroup 
                                    label="Phone" 
                                    type="text"
                                    name="phone" 
                                    value={phone} 
                                    onChange={this.onChangeInput}
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
