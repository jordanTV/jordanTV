var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var models = require("../mongooDatabase/database");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../clientside/build")));

app.get('/',(req,res)=>{
  res.send('hello')
})

app.get("/getData", (req, res) => {
  models.history.find({}).then((data) => {
    console.log(data);

    res.send(data);
  });
});

app.post('/saveData',(req,res)=>{
    console.log('done')
    console.log(req.body.myData)
    var data = req.body.myData
    console.log(data.title)
    var newMovie = new models.history({title:data.title,image:data.image,Date:data.date,tickets:9})
    newMovie.save()
    res.send('hello')
})
app.listen(9000, () => {
  console.log("Listening!");
});
