import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    price:1.00
}
]

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

    render() { 
        return ( 
            <div>
            <h1>Snacks</h1>
            <div >
            {pocronData.map((popc)=>(
                <div>
                <p>Price{popc.price}</p>
                <img src={popc.image} width='100px' height='100px' />
                <button>Add To Cart</button>
                </div>
                )
            )}
            </div>
            <div>
            {drinksData.map((drink)=>(
                <div>
                 <p>Price:{drink.price}</p>
                <img src={drink.image} width='100px' height='100px' />
                <button>Add To Cart</button>
                </div>
                )
            )}
            </div>
            <div>
            <button>
            <Link to='/seats'>
            <li>Next</li>
            </Link>
            </button>
            </div>
            <div>
            <button>
            <Link to='/Movies'>
            <li>Back</li>
            </Link>
            </button>
            </div>
            </div>
             );
    }
}
 
export default Snacks;