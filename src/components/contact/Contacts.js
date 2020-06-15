import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../context';

 class Contacts extends Component {
    
    deleteContact(id)
    {
        const{contacts}=this.state;
        //la methide filter return tout les ligne saufe la ligne qui corspand a id du paramettre
        const newListContacts=contacts.filter((contact)=>contact.id!==id)
        this.setState({
            contacts: newListContacts
        })
        
    }
     
    render() {
        return(<Consumer>
            {value=>(
                 <div>
                          {/*pour chaque hetiration je veux afficher un contact*/}
                            {/*chaque heritation la ligne saffect a ce parametre contact*/}
                          {value.contacts.map((contact)=>(
                        
                  
                           <Contact key={contact.id} data={contact} deleteContactFromChild=
                           {this.deleteContact.bind(this,contact.id)}/>
         
                       ))}
                     </div>

            )}
        </Consumer>
        )
        
        // const{contacts}=this.state;
        // return (
           
        //     <div>
        //          {/*pour chaque hetiration je veux afficher un contact*/}
        //           {/*chaque heritation la ligne saffect a ce parametre contact*/}
        //         {contacts.map((contact)=>(
               
        //         //   {/* <Contact name={contact.name}
                 
        //         //     tel={contact.tel}
        //         //     email={contact.email}

        //         // />*/}
        //         //cree un attribut data est affecter tout les donnees sur le param du fonction
        //           <Contact key={contact.id} data={contact} deleteContactFromChild={this.deleteContact.bind(this,contact.id)}/>

        //         ))}
        //     </div>
        // )
    }
}

export default Contacts;

