import React, { Component } from 'react';
import './App.css';

// Import custom components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Contact Manager</h1>
        <Header branding='Contact Manager'/>
      </div>
    );
  }
}

export default App;
