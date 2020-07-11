import React from 'react';
// ce n'est pas obligatoir de declarer l extension du component
import Contacts from './components/contact/Contacts';
import {Provider} from './components/context';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './components/pages/About';
import pageNotFound from './components/pages/pageNotFound';
import 'font-awesome/css/font-awesome.min.css';
  //pour css il faut declarer extension de fishier
import './App.css'; 
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';


function App() {
  
  
  return (
    // n importer qu elle emplacement ta trouver provider execute sont context
    <Provider>
      <Router>
    <div className="App">
      {/* declare des conmponents et cree des attributes pour jecter des valeur dans le components children */}
      <NavBar title="Contact List"/> 
      
    {/* si le components na pas de valeur alor il va prendr les valeur par defaut si ils sont gerer */}
    {/* <Contact/> */}
    <Switch>
      <Route exact path="/" component={Contacts}/>
      <Route exact path="/contact/add" component={AddContact}/>
      <Route exact path="/contact/edit/:id/" component={EditContact}/>
      <Route exact path="/about/:id/:name" component={About}/>
      <Route component={pageNotFound}/>
    </Switch>
    
    
    </div>
    </Router>
    </Provider>
  );
}

export default App;
