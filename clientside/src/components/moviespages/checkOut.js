import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

class CheckOut extends Component {
    constructor(props){
        super(props)
        this.state={
            //default value to be updated with the get request
            movieData:{title:null,image:null,price:null},
            secodTicket:{title:null,image:null,price:null},
            snackData:{name:null,image:null,price:null},
            secondSnack:{name:null,image:null,price:null},
            tickets:1
        }
this.handleGet=this.handleGet.bind(this)
this.showTotal=this.showTotal.bind(this)
    }
   showTotal(){
       //to show the tital
      $('#xx').attr('hidden',false)
     // $('#showAnother').hide()
      //$('#confirm').hide()
   }
    handleGet(){
        
        //it should bring the snack that the user buy and the snack
        $.get('http://localhost:9000/getSnackAndMovie')
        .done((data)=>{console.log(data.snackData)
            var x = data.movieData[data.movieData.length-1]
            var y = data.snackData[data.snackData.length-1]
            var z = data.snackData[data.snackData.length-2]
            if(x.title===data.movieData[data.movieData.length-2].title){
                this.setState({tickets:2})
            }
           // console.log(x,y)
           //i will allow the user to add two tickets of the same movie only and to buy only tow items
           //from the snacks so he cant buy everything!
          this.setState({movieData:{title:x.title,image:x.image,price:x.price},
                        secodTicket:{title:x.title,image:x.image,price:x.price},
                         snackData:{name:y.name,image:y.image,price:y.price},
                         secondSnack:{name:z.name,image:z.image,price:z.price}
        })
        console.log(this.state)
        })
        .fail((jqxhr,settings,ex)=>{alert('failed'+ex)})
        $('#movie').attr('hidden',false)
        $('#snack').attr('hidden',false)
        $('#secondSn').attr('hidden',false)
    }

    render() { 
        return (
            <div>
            <div id='showAnother'>
            <div>
            {/**to update the state since we did not now to how to solve the refresh problem */}
             <button id='main' onClick={this.handleGet}>Show Recite</button>
             <div id='movie' hidden={true}>
             <h1>Your Cart</h1>
             <p>Title{this.state.movieData.title}</p>
             <p>Number Of Tickets:{this.state.tickets}</p>
             <p>{this.state.movieData.price}</p>
             <img src={this.state.movieData.image} height='100px' width='100px' />
             </div>
             <div id='snack' hidden={true}>
             <p>{this.state.snackData.title}</p>
             <p>{this.state.snackData.price}</p>
             <img src={this.state.snackData.image} height='100px' width='100px' />
             </div>
             <div id='secondSn' hidden={true}>
             <p>{this.state.secondSnack.title}</p>
             <p>{this.state.secondSnack.price}</p>
             <img src={this.state.secondSnack.image} height='100px' width='100px' />
             </div>
             </div>
             {/**confirming part */}
             <button id='confirm' onClick={this.showTotal}>Confirm</button>
             <div id='xx' hidden={true}>
             <p>Have Fun</p>
             <p>Total:{this.state.movieData.price+this.state.snackData.price+this.state.secondSnack.price}</p>
             </div>
             <div>
             </div>
             {/**button with link is going to take me back to home */}
             <button>
             <Link to='/'>
             <li>Home</li>
             </Link>
             </button>
             </div>
             </div>
            );
    }
}
 
export default CheckOut;