import React, { Component} from 'react';
import axios from 'axios';

// This is to set up our context to store our state.
const Context = React.createContext();

// This is our reducer, which updates our state.
const reducer = (state, action) => {
  switch(action.type){
    // case to delete a contact
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter (
          contact => contact.id !== action.payload
        )
      };
      // case to add a new contact
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
      // case to update an existing contact
      // Checking each contact.id to see if it matches our payload.id.
      // if it is a match replace the contact with the payload.
      // if do not match, then leave the contact as is. 
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(
          contact => contact.id === action.payload.id ? (contact = action.payload) : contact)
      }
      
      default:
      return state;

  }
};

// The provider class is the wrapper which holds the state for our application
export class Provider extends Component {
  
  async componentDidMount(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res.data);
    this.setState({ contacts: res.data })
  }
  
  state = {
    // set up the contacts empty array .
    contacts:[],
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