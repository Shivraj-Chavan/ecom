import React, { Component } from 'react'

export default class Myargs extends Component {
state={
    id:110
}

    handelClick=(id,e)=>{
console.log(id);
console.log(e);
}

// handelArgs=()=>{
//     this.handelClick(this.state.id);

// }

    render() {
    return (
      <div>
            <button onClick={(e)=>{
                this.handelClick(this.state.id,e)
            }}>click</button>        
      </div>
    )
  }
}
