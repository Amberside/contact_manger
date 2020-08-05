import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import './App.css';

// Font awestuff 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faArrowCircleLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons'

// Import custom components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Contacts from './components/contacts/Contacts';
import About from './components/pages/About';

class App extends Component {
  
 
  
  render(){
     // Create a Font awesome library
    library.add(faPencilAlt, faArrowCircleLeft, faAngleDown)
    return (
      <Router>
        <div className="App">
          <h1>Contact Manager</h1>
          <Header branding='Contact Manager'/>
          <Switch>
            <Route exact path='/' component={Contacts} />
            <Route exact path='/about' component={About} />
          </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
