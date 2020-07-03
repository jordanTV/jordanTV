import React, { Component } from "react";
import ComingSoon from "./data/comingsoon.data";
import showingNow from "./data/showingnow.data";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      collections1: showingNow,
      collections2: ComingSoon,
      index: 0, //the index of the poster we want to render in showingnow and comingsoon
    };
  }

  render() {
    var { collections1, collections2, index } = this.state;

    // change the showing now poster every 10 sec
    setInterval(() => {
      if (index === 8) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: index + 1 });
      }
    }, 10000);

    return (
      <div>
        <h1>Home Page</h1>
        <div>
          <h3>Showing now</h3>
          <img
            alt={collections1[index].Title}
            src={collections1[index].Poster}
            width="350"
            height="350"
          />
        </div>
        <div>
          <h3>Coming Soon</h3>
          <img
            alt={collections2[index].Title}
            src={collections2[index].Poster}
            width="350"
            height="350"
          />
        </div>
      </div>
    );
  }
}

export default Home;
