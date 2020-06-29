var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var models = require("../mongooDatabase/database");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../cinemaclient/build")));

app.get("/", (req, res) => {
  res.send("i am bored");
});
//to save data to db
//[{numberOfSeats:Number,booked:Boolean}]

//test seats
var newSeat = new models.seats({
  availableSeats: [{ numberOfSeats: 90, booked: false }],
});
newSeat.save();

//test movies
//name:String,duration:Number,showingTime:Number,description:String,image:String
var newMovie = new models.movies({
  name: "me before you",
  duration: 1.6,
  showingTime: 10.3,
  description: "very nice",
  image:
    "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
});
newMovie.save();

app.get("/farah", (req, res) => {
  models.movies.find({}).then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.listen(9000, () => {
  console.log("Listening!");
});
