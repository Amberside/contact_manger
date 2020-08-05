import React, { Component } from 'react'

import Contact from './Contact';

class Contacts extends Component {
  render() {
    const contacts = [
      {
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
      }
  ]
    return (
      <div>
        <h1 className='display-4 text-primary'>Contact List</h1>
        {
          contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))
        }
      </div>
    )
  }
}

export default Contacts