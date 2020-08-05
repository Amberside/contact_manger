import React, { Component } from 'react'

import Contact from './Contact';

class Contacts extends Component {
  render() {
    const contact = {
      id: 1,
      name: 'Jade Doe',
      email: 'jadedoe@gmail.com',
      phone: '(555)-444-5555'
    }
    return (
      <div>
        <Contact contact={contact}/>
      </div>
    )
  }
}

export default Contacts