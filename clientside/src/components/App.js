import React, { Component } from "react";
import "./style.css";
import Nav from "./nav";
import Signin from "./signin";
import Signup from "./signup";
import Snacks from "./moviespages/snacks"
import Seats from "./moviespages/seates"
import CheckOut from "./moviespages/checkOut"
import MoviesList from "./movies";
import Home from "./home";
import Contact from "./contactus";
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
          <Route path="/Movies" component={()=><MoviesList />} />
          <Route path="/contactus" component={Contact} />
          {/**routs to movies pages*/}
          <Route path="/snacks" component={Snacks} />
          <Route path="/seats" component={Seats} />
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
