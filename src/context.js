import React, { Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    // set up the contacts array with inital values.
    contacts: [{
      id: 1,
      name: 'Jade Doe',
      email: 'jadedoe@gmail.com',
      phone: '(555)-444-5555'
    },
    {
      id: 2,
      name: 'Jack Blogs',
      email: 'jackblogs@gmail.com',
      phone: '(465)-345-3523'
    },
    {
      id: 3,
      name: 'Alex Harry',
      email: 'alexharry@gmail.com',
      phone: '(723)-942-3842'
    }],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  
}

render(){
  return(
    <Context.Provider value={this.state}>
      {this.props.children}
    </Context.Provider>
  );
}