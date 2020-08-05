import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom'
import './App.css';

// Import custom components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <h1>Contact Manager</h1>
          <Header branding='Contact Manager'/>
          <Switch>
            <Route exact path='/' component={Contacts} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
