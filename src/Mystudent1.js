import React, { Component } from 'react'

export default class Mystudent1 extends Component {
 
 constructor(props){
super(props);
// this.state={
//     id:this.props.id,
//     name:this.props.name
// }

this.state={
  like:0
}

 }
handelLike=()=>{
  this.setState({like:this.state.like+1})
}

handelDislike=()=>{
  if(this.state.like>0){
  this.setState({like:this.state.like-1})
}}



 clickFun=()=>{
    this.setState({id:102,name:"ok"});
 }
    render() {
    return (
      <div>
        {/* <h1>no : {this.state.id}</h1>
        <h1>name : {this.state.name}</h1>
        <button onClick={this.clickFun}>update</button> */}
        <button onClick={this.handelLike}>like</button>
        <h1>{this.state.like}</h1>
        <button onClick={this.handelDislike}>dislike</button>
      </div>
    )
  }
}
