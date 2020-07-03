var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var models = require("../mongooDatabase/database");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../clientside/build")));

//test if it does access to the client side or not
app.get('/',(req,res)=>{
  res.send('hello')
})

//cart part
//start
app.post('/saveSnack',(req,res)=>{
  console.log(req.body.myData)
  var data = req.body.myData
  console.log(data)
  var newSnack = new models.snack({name:data.name,price:data.price,image:data.image})
  newSnack.save()
})

app.post('/cartMovie',(req,res)=>{
  console.log(req.body.myData)
  var data = req.body.myData
  //save in cart schema
  var addedToCart = new models.addToCart({title:data.title,image:data.image,price:data.price})
  addedToCart.save()
})

app.get('/getSnackAndMovie',(req,res)=>{
  var allData={}
  //1-bring the movie
  models.addToCart.find({}).then((moviesData)=>{
    console.log(moviesData)
    allData.movieData = moviesData
   
  })
  //2-bring the snack
  models.snack.find({}).then((snacksData)=>{
    console.log(snacksData)
    allData.snackData = snacksData
    res.send(allData)
  })
  
})

//end
app.post('/saveData',(req,res)=>{
  console.log('done')
  console.log(req.body.myData)
  var data = req.body.myData
  console.log(data.title)
  var newMovie = new models.history({title:data.title,image:data.image,Date:data.date,tickets:9,price:data.price})
  newMovie.save()
  res.send('hello')
})

app.get("/getData", (req, res) => {
  models.history.find({}).then((data) => {
    console.log(data);
    
    res.send(data);
  });
});

app.listen(9000, () => {
  console.log("Listening!");
});
