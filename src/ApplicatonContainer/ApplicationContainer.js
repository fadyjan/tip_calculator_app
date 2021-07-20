import React from 'react'
import "./ApplicationContainer.css"
import CalculationsComponent from "../CalculationsComponent/CalculationsComponent";
import ResultComponent from "../ResultComponent/ResultComponent";



 function ApplicationContainer() {
    return (
        <div className="Container">
            <CalculationsComponent></CalculationsComponent>
            <ResultComponent></ResultComponent>
        </div>
    )
}
export default ApplicationContainer