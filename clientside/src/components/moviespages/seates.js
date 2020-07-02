import React, { Component } from "react";
import $ from 'jquery'
import { Link } from "react-router-dom";
var data = [
  {
    date:'4/7  time:6pm',
    id: 0,
    title: "Thor",
    price: 60,
    tickets: 53,
    image:
      "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    date:'2/7  time:5pm',
    id: 1,
    title: "Wonder Woman",
    price: 70,
    tickets: 67,
    image: "https://m.media-amazon.com/images/M/MV5BMzE5MDM1NDktY2I0OC00YWI5LTk2NzUtYjczNDczOWQxYjM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    date:'2/7  time:11pm',
    id: 2,
    title: "Despicable Me 3",
    price: 7,
    tickets: 14,
    image: "https://m.media-amazon.com/images/M/MV5BNjUyNzQ2MTg3Ml5BMl5BanBnXkFtZTgwNzE4NDM3MTI@._V1_SX300.jpg",
  },
  {
    date:'3/7  time:10pm',
    id:3,
    title:"Kong: Skull Island",
    price:5,
    tickets:19,
    image:"https://m.media-amazon.com/images/M/MV5BMTUwMzI5ODEwNF5BMl5BanBnXkFtZTgwNjAzNjI2MDI@._V1_SX300.jpg"
  },
  {
    date:'1/7  time:9pm',
    id:4,
    title:"Justice League",
    price:8,
    tickets:18,
    image:"https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  }
];

var movieDetails;
$.get('http://localhost:9000/getData')
.done((data)=>{
  
var title = data[data.length-1].title
var date = data[data.length-1].Date
var tickets = 9
 movieDetails={title:title,date:date,tickets:tickets}
  console.log(movieDetails)})
.fail((jqxhr,settings,ex)=>{alert('failed'+ex)})
class Seats extends Component {
  constructor(props){
      super(props)
      this.handleReques=this.handleReques.bind(this)
      this.handleTickets=this.handleTickets.bind(this)
      this.state={
        seats:9
      }
  }
  handleTickets() {

  }
  handleReques(event){
    this.setState({seats:this.state.seats-1})
    // $.get('http://localhost:9000/getData')
    // .done((data)=>{
      
    // var title = data[data.length-1].title
    // var date = data[data.length-1].Date
    // var tickets = 9
    //  movieDetails={title:title,date:date,tickets:tickets}
    //   console.log(movieDetails)})
    // .fail((jqxhr,settings,ex)=>{alert('failed'+ex)})
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
    render() { 
        return (
            <div>
            <div>
            <h1>Available tickets:{this.state.seats}</h1>
            <p>{movieDetails.title}</p>
            <p>{movieDetails.date}</p>
            {/*<h4>Available Tickets:{this.state.mySeats}</h4>*/}
           <button onClick={this.handleReques}>Add to cart</button>
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
 
export default Seats;
