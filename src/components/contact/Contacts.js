import React, { Component } from 'react';
import Contact from './Contact';
 class Contacts extends Component {
    state={
        contacts:[
            {id:1,name:"rabia elgouail",tel:"+212655823947",email:"rabia.elgouail@gmail.com"},
            {id:2,name:"chadi elgouail",tel:"+212655823947",email:"chadi.elgouail@gmail.com"},
            {id:3,name:"chaima elgouail",tel:"+212655823947",email:"chaima.elgouail@gmail.com"},
            {id:4,name:"sara elgouail",tel:"+212655823947",email:"sara.elgouail@gmail.com"},
        ]
    };
     
    render() {
        
        const{contacts}=this.state;
        return (
           
            <div>
                 {/*pour chaque hetiration je veux afficher un contact*/}
                  {/*chaque heritation la ligne saffect a ce parametre contact*/}
                {contacts.map((contact)=>(
               
                //   {/* <Contact name={contact.name}
                 
                //     tel={contact.tel}
                //     email={contact.email}

                // />*/}
                //cree un attribut data est affecter tout les donnees sur le param du fonction
                  <Contact data={contact}/>

                ))}
            </div>
        )
    }
}
export default Contacts;
