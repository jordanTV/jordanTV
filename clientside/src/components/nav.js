import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    // to style the li's hyperlink
    var navStyle = {
      color: "white",
    };
    return (
      <nav>
        <h3>logo</h3>
        {/* list of hyperlinks that leads to components - className to style list elements */}
        <ul className="nav-links">
          <Link style={navStyle} to="/signin">
            <li>SignIn</li>
          </Link>
          <Link style={navStyle} to="/signup">
            <li>SignUp</li>
          </Link>
          <Link style={navStyle} to="/Movies">
            <li>Movies</li>
          </Link>
          <Link style={navStyle} to="/snacks">
          <li>Snacks</li>
        </Link>
          <Link style={navStyle} to="/contactus">
            <li>Contact us</li>
          </Link>
         
        </ul>
      </nav>
    );
  }
}

export default Nav;
