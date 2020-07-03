var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
// var models = require("../mongooDatabase/database");
var bodyParser = require("body-parser"); //it is already in express this line is not nescessery
//to parse the cookies stored within the users
var cookieParser = require("cookie-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../clientside/build")));

app.use(cookieParser());

//connect to db and make a collection
mongoose.connect("mongodb://localhost/cinema", { useNewUrlParser: true });

var db = mongoose.connection;

db.on("error", () => {
  //if the connection did not work
  console.log("try again mongoose connection does not work");
});

db.once("open", () => {
  console.log("you did it the mongoose connected to db");
});

/***** to test the encryption *****/
// var User = require("./models/user");
// var userInput = {
//   username: "rand",
//   password: "123",
// };
// var user = new User(userInput);
// user.save((err, document) => {
//   if (err) console.log(err);
//   console.log(document);
// });

var userRouter = require("./routes/User");
app.use("/user", userRouter);

//test if it does access to the client side or not
app.get("/", (req, res) => {
  res.send("hello");
});

//cart part
//start
app.post("/saveSnack", (req, res) => {
  console.log(req.body.myData);
  var data = req.body.myData;
  console.log(data);
  var newSnack = new models.snack({
    name: data.name,
    price: data.price,
    image: data.image,
  });
  newSnack.save();
});

app.post("/cartMovie", (req, res) => {
  console.log(req.body.myData);
  var data = req.body.myData;
  //save in cart schema
  var addedToCart = new models.addToCart({
    title: data.title,
    image: data.image,
    price: data.price,
  });
  addedToCart.save();
});

app.get("/getSnackAndMovie", (req, res) => {
  var allData = {};
  //1-bring the movie
  models.addToCart.find({}).then((moviesData) => {
    console.log(moviesData);
    allData.movieData = moviesData;
  });
  //2-bring the snack
  models.snack.find({}).then((snacksData) => {
    console.log(snacksData);
    allData.snackData = snacksData;
    res.send(allData);
  });
});

app.get("/getData", (req, res) => {
  models.history.find({}).then((data) => {
    console.log(data);

    res.send(data);
  });
});

app.post("/saveData", (req, res) => {
  console.log("done");
  console.log(req.body.myData);
  var data = req.body.myData;
  console.log(data.title);
  var newMovie = new db.history({
    title: data.title,
    image: data.image,
    Date: data.date,
    tickets: 9,
  });
  newMovie.save();
  res.send("hello");
});
app.listen(9000, () => {
  console.log("Listening!");
});
