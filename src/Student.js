import React, { Component } from "react";
import StudentDetails from "./StudentDetails";


export default class Student extends Component {

    render() {
        return (
            //JSX code
            // wrapper <></>  , <React.Fragment></React.Fragment>, <Fragment></Fragment>

            <>
                <div>
                  
                    <h1>

                        THis is student
                    </h1>
                    <StudentDetails roll="101" name="shivraj1" marks="99"/>
                    <StudentDetails roll="102" name="shivraj2" marks="44"/>
                    <StudentDetails roll="103" name="shivraj3" marks="66"/>
                </div>
            </>
        );
    }

}