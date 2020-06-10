import React from 'react'
import PropTypes from 'prop-types'
import './NavBar.css'


// le parametre props du fonction anonyme va recevoir les donnee injecter dans 
 const NavBar = (props)=> {
//cree un objet on etulisent js 7 definir les attributes etuliser pour recevoir data 
     const{title}=props;
    return (
        // il fout que les class c'ecrive className pour jsx
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            {/* pour etuliser data recuperer il faut ecrire les attribute entre {name} */}
            <a className="navbar-brand" href="http://localhost:3000">{title}</a>
             <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="http://localhost:3000">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>  
        </nav>
       
    )
}
//donnez a des components des valeur par defaut pour ce qui on pas des valeurs
NavBar.defaultProps={
    title:"Your Title"
}
//data validation
NavBar.propTypes={
    title:PropTypes.string.isRequired
};
export default NavBar;
