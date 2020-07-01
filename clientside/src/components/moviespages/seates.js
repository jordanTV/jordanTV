import React, { Component } from "react";
import { Link } from "react-router-dom";
class Seats extends Component {

    render() { 
        return (<div>
             <h1>Seats</h1>
            <div>
            <button>Next
            <Link to='/checkOut'>
            <li></li>
            </Link>
            </button>
            </div>
            <div>
            <button>Back
            <Link to='/Movies'>
            <li></li>
            </Link>
            </button>
            </div>
            </div>
            );
    }
}
 
export default Seats;