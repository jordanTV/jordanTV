import React, { Component } from "react";
import $ from 'jquery'
import { Link } from "react-router-dom";

//popcron data 
var pocronData = [
{name:"Caramel Popcron",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOhe8abxQtoCd_g--bBaQo3zJJJOwjlkOqGw&usqp=CAU.jpg",
price:.50},
{
    name:"Salt Popcron",
    image:"https://www.bakeyourday.net/wp-content/uploads/2014/06/sea-salt-vinegar-popcorn-32-560x373.jpg",
    price:.75
},
{
    name:"Cheese Popcron",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_McATdTc-EcsauHgcns9WaxL88U4KaO4gGg&usqp=CAU.jpg",
    price: .70
}
]

//drinks data
var drinksData=[{
    name:"Pepsi",
    image:"https://1000logos.net/wp-content/uploads/2017/05/Pepsi-Logo.png",
    price:.25
},
{
    name:"Mirinda",
    image:"https://ih0.redbubble.net/image.568821591.0571/mp,550x550,gloss,ffffff,t.u7.jpg",
    price:.10
},
{
    name:"Seven",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxogZ_eJtTjwfulizhK0T37HMYQd9xAhdG4Q&usqp=CAU.jpg",
    price:.17
}
]

class Snacks extends Component {
    constructor(props){
        super(props)
        this.state ={
            list:pocronData
        }
        this.handlePopc=this.handlePopc.bind(this)
        this.handleDrinks=this.handleDrinks.bind(this)
        this.changeImg=this.changeImg.bind(this)
    }
    //popcron arrow method 
    handlePopc(){
        this.setState({list:pocronData})
    }
    //drinks arrow method
    handleDrinks(){
        this.setState({list:drinksData})
    }
    //to put the item the user buy in shopping icon
    changeImg(){
      $('#tired').attr('hidden',false)
    }
    render() { 
        return ( 
            <div>
            {/**the item that the user buy that is going to not be hidden when the user click on add to cart */}
            <img hidden={true} id='tired' height='40' width='40' style={{position:'fixed',right:'20%',left:'82%',top:'20%'}}  src={'https://images-na.ssl-images-amazon.com/images/I/41C8Ik51UML._AC_.jpg'} />
            <img   id='life' height='100' width='100' style={{position:'fixed',right:'20%',left:'80%',opacity:'.75'}} src={'https://imgproxy.epicpxls.com/2oSnVuGP8kH4I-m1VJLwz7DE_IwaV91NmUtHrrWsxRU/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by9hYjQwMWJk/YWUwNzU2NDdiZmIw/M2FlNDJkMTdhYmNk/MA.jpg'} />

            <h1 style={{position:'absolute',right:'70%',left:'30%' ,top:'40%'}} >Drinks</h1>
            {/**arrow to change the list to drinks */}
            <img onClick={this.handleDrinks} style={{position:'absolute',right:'70%',left:'30%' ,top:'50%'}}  width="60px" src={"https://previews.123rf.com/images/valentint/valentint1506/valentint150600075/40578320-gauche-ic%C3%B4ne-fl%C3%A8che-bouton-internet-sur-fond-blanc-.jpg"}/>
            <div style={{position:'absolute',right:'50%',left:'50%'}}>
            {this.state.list.map((popc)=>(
                <div>
                <p style={{right:'10%'}}>Price:{popc.price}</p>
                <img  src={popc.image} width='100px' height='100px' />
                <img onClick={this.changeImg}  height='100' width='100' src={'https://www.capturehighered.com/wp-content/uploads/2018/03/Add-To-Cart-720x360.jpg'} />
                </div>
                )
            )}
            </div>
            <div>
            <h1 style={{position:'absolute',right:'30%',left:'70%' ,top:'40%'}} >Popcorn</h1>
            {/**arrow to change the list to popcron */}
            <img onClick={this.handlePopc} style={{position:'absolute',right:'30%',left:'70%' ,top:'50%'}} width="60px" src={ "https://previews.123rf.com/images/valentint/valentint1506/valentint150600338/40577313-fl%C3%A8che-droite-ic%C3%B4ne-bouton-internet-sur-fond-blanc-.jpg"} />
            </div>
            <div>
            <button>
              <Link to="/checkOut">
                <li>Next</li>
              </Link>
            </button>
          </div>
          <div>
            <button>
              <Link to="/Movies">
                <li>Back</li>
              </Link>
            </button>
          </div>
          </div>
             );
    }
}
export default Snacks;