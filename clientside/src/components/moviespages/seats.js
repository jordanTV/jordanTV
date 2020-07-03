import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
class seats extends React.Component {
  constructor() {
    super();
    this.state = {
      seat: [
        "Front1",
        "Front2",
        "Front3",
        "Middle1",
        "Middle2",
        "Middle3",
        "Back1",
        "Back2",
        " Back3",
      ],
      seatAvailable: [
        "Front1",
        "Front2",
        "Front3",
        "Middle1",
        "Middle2",
        "Middle3",
        "Back1",
        "Back2",
        "Back3",
      ],
      //empty array to contain the reserved seats
      seatReserved: [],
    };
  }
  onClickData(seat) {
    console.log(seat, "seat");
    console.log(this.seatReserved);
    //if the reserved array contains seats:
    if (this.state.seatReserved.indexOf(seat) >= 0) {
      this.setState({
        //this means if the reserved array has one seat or more than one,
        // and you want to book a seat:it will concat the seat with the available because I put it in the reserved, and remove the available.
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter((res) => res != seat),
      });
    } else {
      this.setState({
        //if the reserved array was empty and you want to book a seat:it will concat the seat with the reserved and remove the available.
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter((res) => res != seat), //if the client want to change his seat
      });
    }
  }
  render() {
    return (
      <div id="ground">
        <h1 id="title">Seat Reservation </h1>
        <div className="screen"></div>
        <ul className="showcase">
          <li>
            <div className="seat selected"></div>
            <small>Available</small>
          </li>
          <li>
            <div className="seat occupied"></div>
            <small>Booked</small>
          </li>
        </ul>
        {/* DrawGrid component */}
        <DrawGrid
          seat={this.state.seat}
          available={this.state.seatAvailable}
          reserved={this.state.seatReserved}
          onClickData={this.onClickData.bind(this)}
        />
      </div>
    );
  }
}
class DrawGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <table className="grid">
          <tbody>
            <tr>
              {this.props.seat.map((row) => (
                <td
                  id="t"
                  className={
                    //if the array's elements have one or more than one element, this mean (reserved).
                    this.props.reserved.indexOf(row) >= 0
                      ? //inline if
                        "reserved" //if the condition was true give me reserved
                      : "available" //if the condition was false give me available
                  }
                  key={row} //I didn't git this!!
                  onClick={(e) => this.onClickSeat(row)}
                >
                  {row}{" "}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        {/* ReservedList Component */}
        <ReservedList reserved={this.props.reserved} />
      </div>
    );
  }
  //seat=row in onClickData
  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}
class ReservedList extends React.Component {
  render() {
    return (
      <div className="count">
        {/* The length of the array which will be indicate to the count of how many seats are reserved */}
        <h4>Reserved Seats: ({this.props.reserved.length})</h4>
        <ul>
          {this.props.reserved.map((res) => (
            <li key={res}>{res}</li>
          ))}
        </ul>
        <div>
          <div>
            <button>
              <Link to="/snacks">
                <li>Next</li>
              </Link>
            </button>
          </div>
          <div>
            <button>
              <Link to="/movies">
                <li>Back</li>
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default seats;