import React, { Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter (
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

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
  }; // end of the state. 
  render(){
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
} // end of provider

export const Consumer = Context.Consumer;