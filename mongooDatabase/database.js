//require mongoose
var mongoose = require('mongoose')
var Schema = mongoose.Schema
//connect to db and make a collection
mongoose.connect('mongodb://localhost/cinema')

var db = mongoose.connection

//showing schema(subschema)
var showingNowSub = new Schema({
    name:String,image:String
})

//coming schema(subschema)
var comingSub = new Schema({
    name:String,image:String
})

//home schema
var homeSchema = new Schema({
    showingNow:[showingNowSub],
    comingSoon:[comingSub]
})
//home model
var home = mongoose.model('homeMovie',homeSchema)

//cart seats schema(subschema)
var seatsSub = new Schema({
    numberOfSeats:Number,movieName:String,price:Number
})

//snack schema(subschema)
var snacksSub = new Schema({
    item:String,price:Number
})

//movie list

//cart schema
var cartSchema = new Schema({
    cart:{seats:[seatsSub],snacks:[snacksSub]}
})

//cart model
var cartModel = mongoose.model('cartData',cartSchema)

 
//movie list schema
var movieListSchema = new Schema({
    name:String,duration:Number,showingTime:Number,description:String,image:String
})

//movie list model
var movies = mongoose.model('listOfMovie',movieListSchema)



//seats schema 
var subSeatSchema = new Schema({
    numberOfSeats:Number,booked:Boolean
})

var seatsSchema = new Schema({
     availableSeats:[subSeatSchema]
})
var seats = mongoose.model('seatsData',seatsSchema)

var subHistSchema = new Schema({
    title:String,
    image:String,
    Date:String,
    tickets:Number
})

//history schema to book amovie
var historySchema = new Schema({
    histMovies: [subHistSchema]
})


//history model schema 
var history = mongoose.model('historyMovie',subHistSchema)

db.on('error',()=>{
    //if the connection did not work
    console.log('try again mongoose connection does not work')
})

db.once('open',()=>{
    console.log('you did it the mongoose connected to db')
})

module.exports = {home,cartModel,movies,seats,history}
