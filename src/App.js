import React from 'react';
// ce n'est pas obligatoir de declarer l extension du component
import Contacts from './components/contact/Contacts';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
  //pour css il faut declarer extension de fishier
import './App.css'; 

function App() {
  
  
  return (

    <div className="App">
      {/* declare des conmponents et cree des attributes pour jecter des valeur dans le components children */}
      <NavBar title="Contact List"/> 
      
    {/* si le components na pas de valeur alor il va prendr les valeur par defaut si ils sont gerer */}
    {/* <Contact/> */}
    
    <Contacts/>
    
    </div>
  );
}

export default App;
