import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <h2>
          { name }
        </h2>
        
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