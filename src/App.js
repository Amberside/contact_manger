import React, { Component } from 'react';
import './App.css';

// Import custom components
import Header from './components/layout/Header';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Contact Manager</h1>
        <Header />
      </div>
    );
  }
}

export default App;
