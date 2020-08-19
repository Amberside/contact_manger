import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Consumer } from '../../context';

class SingleContact extends Component {
  state = {
    showContactInfo: false
  }
  
  onShowClick = e => {
    console.log('OnShowClick');
    this.setState({ showContactInfo: !this.state.showContactInfo });
  }
  
  delClick = (id) => {
    console.log("delete: " + id);
    // This calls the function in contacts.js (parent component) and will pass the id through.
    // this.props.delContact(id);
    // dispatch({ type: 'DELETE_CONTACT', payload: id });
  }
  
  // This will render our contact object passed from contacts.
  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        { value => {
          const { dispatch } = value; // this is pulling our dispatch function in our Consumer
          return (
            <div className='card card-body mb-3'>
              <h2>
                { name }
                <FontAwesomeIcon icon='sort-down' onClick={this.onShowClick} style={{ cursor: "pointer"}}>
                </FontAwesomeIcon>
                {/* This onclick call the local delClick function */}
                <FontAwesomeIcon icon='times' style={{ cursor: "pointer", float: "right", color: "red"  }}
                  onClick={this.delClick.bind(this, id)}
                
                >
                </FontAwesomeIcon>
                {' '}
                <FontAwesomeIcon icon='pencil-alt' style={{ cursor: "pointer", float: "right"  }}>
                </FontAwesomeIcon>
              </h2>
              { showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className='list-group-item'>Phone: {phone}</li>
                </ul>
              ) : null 
              }
            </div>
          )}} 
          {/* this is end the inner return and value sections */}
      </Consumer>
    ) // this closes the outer return
  }
}

SingleContact.defaultProps = {
  name: 'Jade Doe',
  email: 'jadedoe@gmail.com',
  phone: '(555)-444-5555'
}

SingleContact.propTypes = {
  contact: PropTypes.object,
}

export default SingleContact