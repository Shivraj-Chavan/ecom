import React, { Component } from 'react'

export default class Mystate extends Component {
  // state={}   ==>outside function but inside class
  // constructor(props){this.state={}}  ==>inside the constructor
  
    constructor(props){
   
   super(props);
    this.state={
        id:this.props.id,
        name:"shivraj",
        age:33
    }
}
    render() {
    return (
      <div>
        <h1>id : {this.state.id}</h1>
        <h1>name : {this.state.name}</h1>
        <h1>age : {this.state.age}</h1>
        
      </div>
    )
  }
}
