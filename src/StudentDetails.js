import React from 'react'
import StudentsMarks from './StudentsMarks'

function StudentDetails(props) {
  return (
    <div>
        <h1>this is StudentDetails name : {props.name} roll : {props.roll}</h1>
        <StudentsMarks roll={props.roll} marks={props.marks }/>
      
    </div>      
  )
}

export default StudentDetails
    