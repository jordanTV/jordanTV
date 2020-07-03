import React, { Component } from "react";
import $ from 'jquery'
import { Link } from "react-router-dom";

//the backend of the seats
//start 

class Seats extends Component {
  constructor(props){
      super(props)
      this.handleReques=this.handleReques.bind(this)
      this.handleTickets=this.handleTickets.bind(this)
      this.state={
        seats:9,
        movieDetails:{title:null,date:null},
        cartMovie:null

      }
  }
  handleTickets() {//should add it to the cart 
  //first bring it from history document in database(movies that the user booked)
  //since it is done in handle reques method and updated in state i will use it from there
  $.post('http://localhost:9000/cartMovie',{myData:this.state.cartMovie})
  .done(()=>{console.log('done')})
  .fail((jqxhr,settings,ex)=>{alert('failed'+ex)})
    this.setState({seats:this.state.seats-1})
    if($('#ticket1').attr('hidden')==='hidden'){
      $('#ticket1').attr('hidden',false)
    }else   if($('#ticket2').attr('hidden')==='hidden'){
      $('#ticket2').attr('hidden',false)
    }else   if($('#ticket3').attr('hidden')==='hidden'){
      $('#ticket3').attr('hidden',false)
    }else   if($('#ticket4').attr('hidden')==='hidden'){
      $('#ticket4').attr('hidden',false)
    }else   if($('#ticket5').attr('hidden')==='hidden'){
      $('#ticket5').attr('hidden',false)
    }
  }
  handleReques(event){

    $.get('http://localhost:9000/getData')
    .done((data)=>{
      this.setState({cartMovie:data[data.length-1]})
    var title = data[data.length-1].title
    var date = data[data.length-1].Date
    var tickets = 9
    this.setState({movieDetails:{title:title,date:date,tickets:tickets}})
    //  movieDetails={title:title,date:date,tickets:tickets}
    //   console.log(movieDetails)
      $('#showMe').attr('hidden',false)
      $('#meToo').attr('hidden',false)
    }
       
      )
    .fail((jqxhr,settings,ex)=>{alert('failed'+ex)})

  }
    render() { 
      
        return (
            <div>
            <div>
            <p>{

            }</p>
            <h1 hidden={true} id='meToo'>Available tickets:{this.state.seats}</h1>
            <div id='showMe' hidden={true}>
            <p>{this.state.movieDetails.title}</p>
            <p>{this.state.movieDetails.date}</p>
            <button onClick={this.handleTickets}>Add Ticket</button>
            </div>
               {/**to update the page when the get requst is done (to avoid refresh the page) */}
           <button onClick={this.handleReques}>Details</button>
            <img hidden={true}
            id='ticket1'
            width="40px"
            height='40px'
            src='https://static8.depositphotos.com/1012407/1010/v/950/depositphotos_10101087-stock-illustration-one-single-cinema-ticket-vector.jpg'
          />
          <img  hidden={true} id='ticket2' width='40px' height='40px' src='https://static8.depositphotos.com/1012407/1010/v/950/depositphotos_10101087-stock-illustration-one-single-cinema-ticket-vector.jpg' />
          <img  hidden={true} id='ticket3' width='40px' height='40px' src='https://static8.depositphotos.com/1012407/1010/v/950/depositphotos_10101087-stock-illustration-one-single-cinema-ticket-vector.jpg' />
          <img  hidden={true} id='ticket4' width='40px' height='40px' src='https://static8.depositphotos.com/1012407/1010/v/950/depositphotos_10101087-stock-illustration-one-single-cinema-ticket-vector.jpg' />
          <img  hidden={true} id='ticket5' width='40px' height='40px' src='https://static8.depositphotos.com/1012407/1010/v/950/depositphotos_10101087-stock-illustration-one-single-cinema-ticket-vector.jpg' />
          </div>
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
//end
 
export default Seats;