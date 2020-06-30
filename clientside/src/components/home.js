import React, { Component } from "react";
import ComingSoon from "./data/comingsoon.data";
import showingNow from "./data/showingnow.data";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      collections1: showingNow,
      collections2: ComingSoon,
      index1: 0, //the index of the poster we want to render in showingnow
      index2: 0, //the index of the poster we want to render in comingsoon
    };
  }

  render() {
    var { collections1, collections2, index1, index2 } = this.state;

    // change the showing now poster every 90min
    setInterval(() => {
      if (index1 === 8) {
        this.setState({ index1: 0 });
      } else {
        this.setState({ index1: index1 + 1 });
      }
    }, 90 * 60 * 1000);

    // change the coming soon poster every 1min
    setInterval(() => {
      if (index2 === 8) {
        this.setState({ index2: 0 });
      } else {
        this.setState({ index2: index2 + 1 });
      }
    }, 60000);

    return (
      <div>
        <h1>Home Page</h1>
        <div>
          <h3>Showing now</h3>
          <img
            alt={collections1[index1].Title}
            src={collections1[index1].Poster}
            width="350"
            height="350"
          />
        </div>
        <div>
          <h3>Coming Soon</h3>
          <img
            alt={collections2[index2].Title}
            src={collections2[index2].Poster}
            width="350"
            height="350"
          />
        </div>
      </div>
    );
  }
}

export default Home;
