import React, { Component } from "react";
import $ from 'jquery'
import { Link } from "react-router-dom";

//the data of the pocron and thr drinks
var allData = [
{name:"Caramel Popcron",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOhe8abxQtoCd_g--bBaQo3zJJJOwjlkOqGw&usqp=CAU.jpg",
price:.50},
{
    name:"Salt Popcron",
    image:"https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/04/popcornHOR-11.png?fit=750%2C750&ssl=1",
    price:.75
},
{
    name:"Cheese Popcron",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_McATdTc-EcsauHgcns9WaxL88U4KaO4gGg&usqp=CAU.jpg",
    price: .70
},
{
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


class MakeEach extends Component{
  constructor(props){
    super(props)
    this.changeImg = this.changeImg.bind(this)
  }
    //to put the item the user buy in shopping icon
    changeImg(){
      $.post('http://localhost:9000/saveSnack',{myData:this.props.snackData})
      .done(function(){alert('request Done')})
      .fail(function(jqxhr,settings,ex){alert('failed'+ex)})
      $('#tired').attr('hidden',false)
      if(this.props.snackData.name.includes('Popcron')){
         $('#popc').attr('hidden',false)
         $('#tired').attr('hidden',true)
      }
     
    }
  render(){
    return (
      <div>
      <p style={{right:'10%'}}>Price:{this.props.snackData.price}</p>
      <img  src={this.props.snackData.image} width='100px' height='100px' />
      <img onClick={this.changeImg}  height='100' width='100' src={'https://www.capturehighered.com/wp-content/uploads/2018/03/Add-To-Cart-720x360.jpg'} />

      </div>
    )
  }
}

class Snacks extends Component {
    constructor(props){
        super(props)
        this.state ={
            list:allData
        }
    }

  
    render() { 
        return ( 
            <div>
            {/**the item that the user buy that is going to not be hidden when the user click on add to cart */}
            <img hidden={true} id='tired' height='40' width='40' style={{position:'fixed',right:'20%',left:'82.3%',top:'20%'}}  src={'https://images-na.ssl-images-amazon.com/images/I/41C8Ik51UML._AC_.jpg'} />
            <img hidden={true} id='popc' height='70' width='60' style={{position:'fixed',right:'45%',left:'81.5%',top:'15%'}} src={'https://pbs.twimg.com/profile_images/424503436776706048/r6EsqH3n_400x400.png'} />
            <img   id='life' height='100' width='100' style={{position:'fixed',right:'20%',left:'80%',opacity:'.5'}} src={'https://imgproxy.epicpxls.com/2oSnVuGP8kH4I-m1VJLwz7DE_IwaV91NmUtHrrWsxRU/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by9hYjQwMWJk/YWUwNzU2NDdiZmIw/M2FlNDJkMTdhYmNk/MA.jpg'} />
            <div style={{position:'absolute',right:'50%',left:'50%'}}>
            {this.state.list.map((popc)=>(
                <MakeEach snackData={popc} />
                )
            )}
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