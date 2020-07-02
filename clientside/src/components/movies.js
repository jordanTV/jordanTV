import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import $ from "jquery";

//data to use in movies list (same list in showing now)
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
    this.showDes = this.showDes.bind(this);
    this.handle = this.handle.bind(this)
  }

//question mark method to show the description of the movie when it is clicked
  showDes() {
    if ($("#hide").attr("hidden")) {
      $("#hide").attr("hidden", false);
    } else {
      $("#hide").attr("hidden", true);
    }
    console.log($("#hide").attr("hidden"));
  }

//when a movie is selected this function is going to save it in the database 
  handle(event){
console.log(data)
  var targetMovie = data.find((movie)=>{
    if(movie.title===event.target.value){
      return movie
    }
  })
  var x = {title:targetMovie.title,image:targetMovie.image,price:targetMovie.price,date:targetMovie.date}
  $.post('http://localhost:9000/saveData',{myData:x})
.done(()=>{console.log('request done')})
.fail(function(jqxhr,settings,ex){console.log('failed'+ex)})

this.setState({allData:targetMovie})

  }
  render() {
    return (
      <div>
        <div>
          <div>
           {/* Search<input type="text" id="search"></input>
            <button id="submit" onClick={this.handleSearch}>
              Submit
    </button>*/}
    <select id="filtred-by" onChange={this.handle}>
        <option value="Thor" >Thor</option>
        <option value="Wonder Woman" >Wonder Woman</option>
        <option value="Despicable Me 3" >Despicable Me 3</option>
        <option value="Kong: Skull Island" >Kong: Skull Island</option>
        <option value="Justice League" >Justice League</option>
    </select>
          </div>
          <div style={{ position: 'absolute', right: "40%", left: "85%" ,top:'40%' }}>
            <div>
            {/**question mark image to show the movie description */}
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
              <button onClick={this.moveToSeacts}>
              <Link to="/seats">
              <li>Book Now</li>
            </Link>
              </button>
              <img  onClick={this.handle} height='100' width='100' src={'https://www.capturehighered.com/wp-content/uploads/2018/03/Add-To-Cart-720x360.jpg'} />
            </div>
          </div>
          <div class="all" id="shadow">

            <img
            id="me"
              class="rad"
              src={this.state.allData.image}
              width="650px"
              height="400px"
            />
            <span>
              {/* right */}

            </span>
          </div>
          <div>
          <button>
            {/* take you to the next page */}
            <Link to="/seats">
              <li>Next</li>
            </Link>
          </button>
        </div>
        </div>
      </div>
    );
  }
}
export default MoviesList;

