import React, { Component } from "react";
import "./style.css";
import Nav from "./nav";
import Signin from "./signin";
import Signup from "./signup";
import Movies from "./movies";
import Home from "./home";
import Contact from "./contactus";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MOVIE_DATA from "./data/movie.data";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* we need the bar to be fixed in all pages so we'll route over the
          components excluding it */}
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/movies" component={Movies} />
          <Route path="/contactus" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
