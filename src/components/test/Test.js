import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    message: 'Hello'
  }
  
  componentDidMount() {
    // Runs when the component has rendered when it has mounted.
    console.log("Component Did Mount");
    // This is the place we would make calls to an api if we are using one.
  }
  
  componentDidUpdate(){
    // this runs if there is any change to the state.
    console.log("State changed")
  }
  
  onChange = e => {
    this.state({
      [e.target.name]: e.target.value
    });
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  }
  
  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <p>Page to test lifecycle methods</p>
        <p>{ message } </p>
        <form>
          <div class="form-group">
            <label for="newMessage">New Message</label>
            <input 
              type="text"  
              class="form-control"  
              id="newMessage" 
              placeholder="New Message"
              name="message"
              value={message}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" class="btn btn-primary" onSubmit={this.onSubmit}>Submit</button>
        </form>
        
      </div>
    )
  }
}
