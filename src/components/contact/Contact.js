import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './contact.css'


class Contact extends Component {
    render() {
        //pour les components sous form de class il faut etuliser props pre definit c'elle qui recoi data
        const { name, tel, email } = this.props.data;
        return (

            <div className="card">

                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">
                        <ul className="list-group">

                            <li className="list-group-item">{tel}</li>
                            <li className="list-group-item">{email}</li>

                        </ul>
                    </p>
                </div>
            </div>
        )
    }



}
Contact.defaultProps = {
    name: "default",
    tel: "+************",
    email: "default@GMAIL.COM"
}
Contact.propTypes = {
    data: PropTypes.object.isRequired,
   
}
// Contact.propTypes = {
//     name: PropTypes.string,
//     tel: PropTypes.string,
//     email: PropTypes.string
// }
export default Contact;
