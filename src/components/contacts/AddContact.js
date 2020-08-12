import React, { Component, Fragment } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };
  
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Fragment>
        <h1 className="display-4 text-primary">Add New Contact</h1>
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form >
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text"  
                  className="form-control"  
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                  error={errors.name}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="text"  
                  className="form-control"  
                  placeholder="Email"
                  name="Email"
                  value={email}
                  onChange={this.onChange}
                  error={errors.email}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input 
                  type="text"  
                  className="form-control"  
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={this.onChange}
                  error={errors.phone}
                />
              </div>
              <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
            </form>
          </div>
          
        </div>   {/* end of the card */}
      </Fragment>  
    )
  }
}

export default AddContact;