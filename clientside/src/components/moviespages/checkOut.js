import React, { Component } from "react";
import { Link } from "react-router-dom";
class CheckOut extends Component {

    render() { 
        return (<div>
             <h1>CheckOut</h1> 
             <div>
             <button>
             <Link to='/'>
             <li>Home</li>
             </Link>
             </button>
             </div>
             </div>
            );
    }
}
 
export default CheckOut;