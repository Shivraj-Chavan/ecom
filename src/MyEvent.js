import React, { Component } from 'react'

export default class MyEvent extends Component {
 // use arrow function or use bind for this 

 
    constructor(){
    super();
    this.handelClick=this.handelClick.bind(this)
   }
   
    state={
        id:111,
        name:"ok"
    
      }
    handelClick(){


    console.log("clickkkkk");
    console.log(this);
  }  
//     handelClick=()=>{


//     console.log("clickkkkk");
//     console.log(this);
//   }  

    render() {
    return (
      <div>MyEvent

        <button onClick={this.handelClick}>clickc</button>
      </div>
    )
  }
}
