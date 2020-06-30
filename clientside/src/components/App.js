import React, { Component } from "react";
import "./style.css";
import Nav from "./nav";
import Signin from "./signin";
import Signup from "./signup";
import MoviesList from "./movies";
import Contact from "./contactus";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Snacks from "./snacks"
import Seats from "./seates"
import CheckOut from "./checkOut"

import $ from "jquery";
var moviesData;
$.get("https://www.omdbapi.com/?s=" + "me before you" + "&apikey=ba1f4581")
  .done((data) => {
    moviesData = data.Search;
  })
  .fail((jqxhr, settings, ex) => {
    alert("failed" + ex);
  });
class App extends Component {
  render() {
    //() => <PropsPage title={`Props through component`} />
    return (
      <Router>
        <div>
          {/* we need the bar to be fixed in all pages so we'll route over the
          components excluding it */}
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/Movies" component={()=><MoviesList />} />
          <Route path="/contactus" component={Contact} />
          <Route path="/snacks" component={Snacks} />
          <Route path="/seats" component={Seats} />
          <Route path="/checkOut" component={CheckOut} />
        </div>
      </Router>
    );
  }
}

// Since Home is the main component We'll display it in the App
var Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
