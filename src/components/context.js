import React, { Component } from 'react'
const Context=React.createContext();
const reducer=(state,action)=>{
    switch (action.type) {
        case 'DELETE_CONTACT':
            return { 
                
                contacts:state.contacts.filter((contact)=>contact.id!==action.payload)
            };
            default:
      
                return state;
         }
}

export class Provider extends Component {
    state={
        contacts:[
            {id:1,name:"rabia elgouail",tel:"+212655823947",email:"rabia.elgouail@gmail.com"},
            {id:2,name:"chadi elgouail",tel:"+212655823947",email:"chadi.elgouail@gmail.com"},
            {id:3,name:"chaima elgouail",tel:"+212655823947",email:"chaima.elgouail@gmail.com"},
            {id:4,name:"sara elgouail",tel:"+212655823947",email:"sara.elgouail@gmail.com"},
        ],
        dispatch:action=>this.setState(state=>reducer(state,action))
        
    };
    
    render() {
        return (
           <Context.Provider value={this.state}> 
               {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer=Context.Consumer;

