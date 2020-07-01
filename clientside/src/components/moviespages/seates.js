import React, { Component } from "react";
import { Link } from "react-router-dom";
class Seats extends Component {

    render() { 
        return (<div>
             <h1>Seats</h1>
            <div>
            <button>
            <Link to='/checkOut'>
            <li>Next</li>
            </Link>
            </button>
            </div>
            <div>
            <button>
            <Link to='/Movies'>
            <li>Back</li>
            </Link>
            </button>
            </div>
            </div>
            );
    }
}
 
export default Seats;