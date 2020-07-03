import React, { Component } from "react";
import "./style.css";
import Nav from "./nav";
import Signin from "./signin";
import Signup from "./signup";
<<<<<<< HEAD
import Snacks from "./moviespages/snacks";
import Seats from "./moviespages/seates";
import CheckOut from "./moviespages/checkOut";
=======
import Snacks from "./moviespages/snacks"
import Tickets from "./moviespages/tickets"
import CheckOut from "./moviespages/checkOut"
>>>>>>> a406eeb15363119584ab1e40d2e72fad5a70c437
import MoviesList from "./movies";
import Home from "./home";
import Contact from "./contactus";
import Seats from "./moviespages/seats"
import { BrowserRouter as Router, Route } from "react-router-dom";

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
          {/* the arrow function >> To add props later*/}
          <Route path="/Movies" component={() => <MoviesList />} />{" "}
          <Route path="/contactus" component={Contact} />
          {/**routes to movies pages*/}
          <Route path="/snacks" component={Snacks} />
          <Route path="/tickets" component={Tickets} />
          <Route path='/seats' component={Seats} />
          <Route path="/checkOut" component={CheckOut} />
        </div>
      </Router>
    );
  }
}
// var Home = () => (
//   <div>
//     <h1>Home Page</h1>
//   </div>
// );

export default App;
