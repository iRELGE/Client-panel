import React, { Component } from 'react'
const Context=React.createContext();

export class Provider extends Component {
    state={
        contacts:[
            {id:1,name:"rabia elgouail",tel:"+212655823947",email:"rabia.elgouail@gmail.com"},
            {id:2,name:"chadi elgouail",tel:"+212655823947",email:"chadi.elgouail@gmail.com"},
            {id:3,name:"chaima elgouail",tel:"+212655823947",email:"chaima.elgouail@gmail.com"},
            {id:4,name:"sara elgouail",tel:"+212655823947",email:"sara.elgouail@gmail.com"},
        ]
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

