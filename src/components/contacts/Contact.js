import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
  // This will render our contact object passed from contacts.
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <h2>
          { name }
          <FontAwesomeIcon icon='sort-down'></FontAwesomeIcon>
          <FontAwesomeIcon icon='pencil-alt'></FontAwesomeIcon>
          <FontAwesomeIcon icon='times'></FontAwesomeIcon>
        </h2>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    )
  }
}

Contact.defaultProps = {
  name: 'Jade Doe',
  email: 'jadedoe@gmail.com',
  phone: '(555)-444-5555'
}

Contact.propTypes = {
  contact: PropTypes.object,
}

export default Contact