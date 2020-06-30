import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import $ from "jquery";
// image: "https://assets.nflxext.com/us/boxshots/ghd/80043744.jpg"
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
class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: data[0].id,
      allData: data[0],
      mySeats: data[0].tickets,
    };
    this.updateToNext = this.updateToNext.bind(this);
    this.updateToleft = this.updateToleft.bind(this);
    this.showDes = this.showDes.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTickets = this.handleTickets.bind(this);
  }
  updateToNext() {
    if (this.state.id === 0) {
      this.setState({
        allData: data[1],
        mySeats: data[1].tickets,
        id: data[1].id,
      });
    }
    if (this.state.id === 1) {
      this.setState({
        allData: data[2],
        mySeats: data[2].tickets,
        id: data[2].id,
      });
    }
    if(this.state.id === 2){
      this.setState({
        allData: data[3],
        mySeats: data[3].tickets,
        id: data[3].id,
      });
    }
    if(this.state.id === 3){
      this.setState({
        allData: data[4],
        mySeats: data[4].tickets,
        id: data[4].id,
      });
    }

  }
  updateToleft() {
    if (this.state.id === 1) {
      this.setState({
        allData: data[0],
        mySeats: data[0].tickets,
        id: data[0].id,
      });
    }
    if (this.state.id === 2) {
      this.setState({
        allData: data[1],
        mySeats: data[1].tickets,
        id: data[1].id,
      });
    }
    if (this.state.id === 3) {
      this.setState({
        allData: data[2],
        mySeats: data[2].tickets,
        id: data[2].id,
      });
    }
    if (this.state.id === 4) {
      this.setState({
        allData: data[3],
        mySeats: data[3].tickets,
        id: data[3].id,
      });
    }
  }
  showDes() {
    if ($("#hide").attr("hidden")) {
      $("#hide").attr("hidden", false);
    } else {
      $("#hide").attr("hidden", true);
    }
    console.log($("#hide").attr("hidden"));
  }
  handleSearch() {
    //Api part
    var movieTitle = $("#search").val();
    $.get("https://www.omdbapi.com/?s=" + movieTitle + "&apikey=ba1f4581")
      .done((data) => {
        //moviesData = data.Search;
        console.log(data.Search[0]);
        var newArr = [
          {
            image: data.Search[0].Poster,
            title: data.Search[0].Title,
            price: 45,
            tickets: 34,
          },
        ];
        console.log(newArr);
        // $('#yes').attr('src',newArr[0])
        this.setState({ allData: newArr[0] });
      })
      .fail((jqxhr, settings, ex) => {
        alert("failed" + ex);
      });
  }
  handleTickets() {
    var x = this.state.mySeats;
    x = x - 1;
    this.setState({ mySeats: x }, () => {
      console.log(this.state.mySeats + "  x:" + x);
    });
  }
  render() {
    return (
      <div>
        <div>
          <h4>Available Tickets:{this.state.mySeats}</h4>
          <div>
            Search<input type="text" id="search"></input>
            <button id="submit" onClick={this.handleSearch}>
              Submit
            </button>
          </div>
          <img
            onClick={this.handleTickets}
            width="100px"
            // style={{ position: "fixed", right: "20%", left: "80%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTMfDggK2WUK8ZLgilgzc3jPCWJGPNMNoqeA&usqp=CAU.jpg"
          />
          <div style={{ position: 'absolute', right: "40%", left: "85%" ,top:'40%' }}>
            <div>
              <img
                onClick={this.showDes}
                id="bored"
                src={
                  "https://previews.123rf.com/images/alexwhite/alexwhite1705/alexwhite170501837/79102196-interrogation-ic%C3%B4ne-web-moderne-avec-bordure-dor%C3%A9e-isol%C3%A9-sur-fond-blanc-bouton-rond-arrondi.jpg"
                }
                width="100px"
              />
            </div>
            <div id="hide" hidden="true">
            <p>
            <b>Date:</b>
            {this.state.allData.date}
          </p>
              <p>
                <b>Title:</b>
                {this.state.allData.title}{" "}
              </p>
              <p>
                <b>Price:</b>
                {this.state.allData.price}
              </p>
            </div>
          </div>
          <div class="all" id="shadow">
            <img
              // id="left"
              src={
                "https://previews.123rf.com/images/valentint/valentint1506/valentint150600075/40578320-gauche-ic%C3%B4ne-fl%C3%A8che-bouton-internet-sur-fond-blanc-.jpg"
              }
              width="60px"
              style={{ padding: 8 }}
              onClick={this.updateToleft}
            />
            <img
              class="rad"
              src={this.state.allData.image}
              width="650px"
              height="400px"
            />
            <span>
              {/* right */}
              <img
                id="right"
                src={
                  "https://previews.123rf.com/images/valentint/valentint1506/valentint150600338/40577313-fl%C3%A8che-droite-ic%C3%B4ne-bouton-internet-sur-fond-blanc-.jpg"
                }
                width="60px"
                onClick={this.updateToNext}
              />
            </span>

            
          </div>
        </div>
      </div>
    );
  }
}
export default MoviesList;
