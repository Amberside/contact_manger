import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { Consumer } from '../../context';

class EditContact extends Component {
  // The state only holds the errors as we are using refs to hold the values from the form
  state = {
    errors: {},
  };
  
  // create the refs to hold the values from the form.
  nameInput = React.createRef();
  emailInput = React.createRef();
  phoneInput = React.createRef();

  // this function will be called when the form is submitted.
  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    console.log("Submit: update")

    // creating variables to store our values.
    // Pull the id out of the url
    const { id } = this.props.match.params;
    // get the current value from the form using the refs we set up.
    const name = this.nameInput.current.value;
    const email = this.emailInput.current.value;
    const phone = this.phoneInput.current.value;
    console.log(name + ' ' + email + ' ' + phone)
    // Check for Errors
    
    if (name === ''){
      // this sets errors.name state value
      this.setState({ errors: {name: 'Name is required '}});
      return; // this will stop the onSubmit from running
    }
    if (email === ''){
      // this sets errors.name state value
      this.setState({ errors: {email: 'Email is required '}});
      return; // this will stop the onSubmit from running
    }
    if (phone === ''){
      // this sets errors.name state value
      this.setState({ errors: {phone: 'Phone is required '}});
      return; // this will stop the onSubmit from running
    }
    // we call also use Bootstrap -isValid -isInvalid 
    // we can change the classes dynamically. 
    
    // create a updated Contact object 
    const updContact = {
      id,
      name,
      email,
      phone
    }
    
     // send the updated contact to an api or state managment.
    console.log(updContact);
    // this is where we would call our dispatch function
    // dispatch our updated contact to the global state
    dispatch({ type: 'UPDATE_CONTACT', payload: updContact});
    // redirect the browser back to the contacts page ('/')
    this.props.history.push("/");
  }
  
  render() {
    // pull out the id from the url
    const cid = this.props.match.params;
    // pull the errors out of state.
    const { errors } = this.state;
    return (
      <Consumer>
        { value => {
          const { dispatch, contacts } = value;
          // get the contact from the state by finding the contact in the 
          // contacts array by matching the cont.id to the cid from the url
          const contact = contacts.find(cont => cont.id === cid.id);
          return (
            <Fragment>
              <h1 className="display-4 text-primary">Edit Contact</h1>
              <div className="card mb-3">
                <div className="card-header">Update Contact</div>
                <div className="card-body">
                  <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                    <div className="form-group">
                      <label>Name</label>
                      <input 
                        type="text"  
                        className={classnames("form-control", { 'is-invalid' : errors.name })  }
                        placeholder="Name"
                        name="name"
                        // set the default value for the form (contact.name)
                        defaultValue={contact.name}
                        // use the nameInput ref here
                        ref={this.nameInput}
                        
                      />
                      {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input 
                        type="email"  
                        className={classnames("form-control", { 'is-invalid' : errors.email })  }
                        placeholder="Email"
                        name="email"
                        // set the default value for the form (contact.email)
                        defaultValue={contact.email}
                        // use the emailInput ref here
                        ref={this.emailInput}
                        
                      />
                      {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input 
                        type="text"  
                        className={classnames("form-control", { 'is-invalid' : errors.phone })  } 
                        placeholder="Phone"
                        name="phone"
                        // set the default value for the form (contact.phone)
                        defaultValue={contact.phone}
                        // use the phoneInput ref here
                        ref={this.phoneInput}
                      />
                      {errors.phone && <div className='invalid-feedback'>{errors.phone}</div>}
                    </div>
                    <input type="submit" value="Update Contact" className="btn btn-light btn-block" />
                  </form>
                </div>
                
              </div>   {/* end of the card */}
            </Fragment>  
           )}}
      </Consumer>
    )
  }
}

export default EditContact;