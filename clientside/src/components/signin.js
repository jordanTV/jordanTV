import React, { Component } from "react";

class Signin extends Component {
  render() {
    return (
      <div>
        <h2>Already have an Account?</h2>
        <span>Sign In with your Email and Password</span>
        <br />
        <br />

        <div>
          <form>
            <input name="username" type="email" placeholder="Email" required />
            <br />
            <br />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <br />
            <br />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
