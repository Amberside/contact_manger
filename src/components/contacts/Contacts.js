import React, { Component } from 'react'

import Contact from './Contact';

class Contacts extends Component {
  state = [{
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
  }];
  
  deleteContact (id) {
    console.log("Deleting contact: " + id);
  }
  
  render() {
    return (
      <div>
        <h1 className='display-4 text-primary'>Contact List</h1>
        {
          this.state.map(contact => (
            <Contact key={contact.id} contact={contact} 
              delContact={this.deleteContact.bind(this, contact.id)}
            />
          ))
        }
      </div>
    )
  } // End of Render 
} // End of Component Contacts

export default Contacts