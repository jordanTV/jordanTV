import React, { Component } from "react";
import MOVIE_DATA from "./data/movie.data";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      collections: MOVIE_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      //   <img
      //     alt={collections[0].Title}
      //     src={collections[0].Poster}
      //     width="500"
      //     height="500"
      //   />
      <h1>Home Page</h1>
    );
  }
}

export default Home;
