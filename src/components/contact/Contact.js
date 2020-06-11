import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './contact.css'


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
    render() {
        
        //pour les components sous form de class il faut etuliser props pre definit c'elle qui recoi data
        const { name, tel, email } = this.props.data;
        return (

            <div className="card">

                <div className="card-body">
                    <h4 className="card-title">{name}
                    {/* on click va aficher ou bien cacher le contenu */}
                    {/* si en click on va declencher une methode  */}
                     {/* onClick la methode ShowContact va avoir name on parame obligatoit de delarer this 
                     NB n indique pas que j ai deux param pour avoir data non pas les infos du event  */}
                    
                    {(this.state.showContactToggle)?(<i onClick={this.ShowContact.bind(this,name)} className="fa fa-sort-down"></i>):(<i onClick={this.ShowContact.bind(this,name)} class="fa fa-plus" aria-hidden="true"></i>)}
                    </h4>
                   
                    <p className="card-text">
                        {/* affisher le contenu dans les parentaise si l acondition est true si nn afficher le null */}
                        {(this.state.showContactToggle)?(
                        <ul className="list-group">
                         <li className="list-group-item">{tel}</li>
                        <li className="list-group-item">{email}</li>
                        </ul>)
                        :(null)}
                        
                    </p>
                </div>
            </div>
        )
    }



}
// Contact.defaultProps = {
//     name: "default",
//     tel: "+************",
//     email: "default@GMAIL.COM"
// }
Contact.propTypes = {
    data: PropTypes.object.isRequired,
   
}
// Contact.propTypes = {
//     name: PropTypes.string,
//     tel: PropTypes.string,
//     email: PropTypes.string
// }
export default Contact;
