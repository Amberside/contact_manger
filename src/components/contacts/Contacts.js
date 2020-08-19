import React, { Component } from 'react'

import SingleContact from './SingleContact';

class Contacts extends Component {
  // create the state for the component
  
  
  // The deleteContact function
  deleteContact = (id)  => {
    console.log("Deleting contact: " + id);
    // add code here to change the state. 
    // check the state and remove the item where State(contact.id) === id we pass through.
    // console.log(this.state);
    // console.log(this.state.contacts);
    // dispatch ({ type: "DELETE_CONTACT", payload: id })
    this.setState({ 
      contacts: this.state.contacts.filter( (contact) => contact.id !== id )  
    });
    // the filter fuction returns another array, with the id that we passed through omitted.
  }
  
  render() {
    // pull the contacts array out of the state to use
    const { contacts } = this.state;
    return (
      <div>
        <h1 className='display-4 text-primary'>Contact List</h1>
        {
          // we are checking the contacts array for each of the contact objects
          contacts.map(contact => (
            // This passes the contact object to the Contact component
            <SingleContact key={contact.id} contact={contact} 
            // This is passing the deleteContact function to the Contact component
              delContact={this.deleteContact.bind(contact.id)}
            />
          ))
        }
      </div>
    )
  } // End of Render 
} // End of Component Contacts

export default Contacts