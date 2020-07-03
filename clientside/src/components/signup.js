import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <h2>Not Registered Yet?</h2>
        <span>Create an Account</span>
        <div>
          <form>
            <input type="text" placeholder="Full Name" required /> <br />
            <br />
            <input type="email" label="Email" placeholder="Email" required />
            <br />
            <br />
            <input type="text" placeholder="Contact Number" required />
            <br />
            <br />
            <input type="password" placeholder="Password" required />
            <br />
            <br />
            <input type="password" placeholder="Confirm Password" required />
            <br />
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
