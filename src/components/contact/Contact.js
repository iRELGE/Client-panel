import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './contact.css'
import {Consumer} from '../context';


class Contact extends Component {
    state = {
        showContactToggle: false
    }
   
    ShowContact(name)
    {
        console.log(name);
        this.setState(
            {
                showContactToggle:!this.state.showContactToggle
            }
        )
      }
      onDeleteClick=(id,dispatch)=>
      {
          
          dispatch(
              {
                  type:'DELETE_CONTACT',
                  payload: id
              }
          )
        
      }
    render() {
        
        //pour les components sous form de class il faut etuliser props pre definit c'elle qui recoi data
        const { id,name, phone, email } = this.props.data;
        return(
            <Consumer>
            {value=>{
                const { dispatch }=value;
                return(

                     <div className="card">

                     <div className="card-body">
                         <h4 className="card-title">{name}
                         {/* on click va aficher ou bien cacher le contenu */}
                         {/* si en click on va declencher une methode  */}
                          {/* onClick la methode ShowContact va avoir name on parame obligatoit de delarer this 
                          NB n indique pas que j ai deux param pour avoir data non pas les infos du event  */}
                         
                         {(this.state.showContactToggle)?(<i onClick={this.ShowContact.bind(this,name)} className="fa fa-sort-down"  style={{cursor:'pointer'}}></i>):(<i onClick={this.ShowContact.bind(this,name)} style={{cursor:'pointer'}} className="fa fa-plus" aria-hidden="true">
     
                         </i>)}
                       
                         <i onClick={this.onDeleteClick.bind(this,id,dispatch)} style={{color:'red' ,float:'right',cursor:'pointer'}} className="fa fa-times" aria-hidden="true"></i>
                         </h4>
                        
                         <div className="card-text">
                             {/* affisher le contenu dans les parentaise si l acondition est true si nn afficher le null */}
                             {(this.state.showContactToggle)?(
                             <ul className="list-group">
                              <li className="list-group-item">{phone}</li>
                             <li className="list-group-item">{email}</li>
                             </ul>)
                             :(null)}
                             
                         </div>
                     </div>
                 </div>
                )
        }
    }
                
            </Consumer>
        )
        
    }



}
Contact.defaultProps = {
     name: "default",
     phone: "+************",
     email: "default@GMAIL.COM"
 }
Contact.propTypes = {
    data: PropTypes.object.isRequired
 
   
}
// Contact.propTypes = {
//     name: PropTypes.string,
//     tel: PropTypes.string,
//     email: PropTypes.string
// }
export default Contact;
