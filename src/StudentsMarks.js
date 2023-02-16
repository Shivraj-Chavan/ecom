import React, { Component } from 'react'

export default class StudentsMarks extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.roll} marks : {this.props.marks}</h1>
        <h1>my marks</h1>
      </div>
    )
  }
}
