import React from 'react';
import '../CircleSelector/CircleSelector.css'

const CircleSelector = (props) => {
    
    return (
        <div className="CircleSelector">
            <button name="buttonOne" className={(props.buttonOne) ? "selected" : ""} onClick={props.handleButtonOne}>{(props.buttonOne) ? "CIRCLE 1 SELECTED" : "SELECT CIRCLE 1"}</button>
            <button name="buttonTwo" className={(props.buttonTwo) ? "selected" : ""} onClick={props.handleButtonTwo}>{(props.buttonTwo) ? "CIRCLE 2 SELECTED" : "SELECT CIRCLE 2"}</button>
            <button name="buttonThree" className={(props.buttonThree) ? "selected" : ""} onClick={props.handleButtonThree}>{(props.buttonThree) ? "CIRCLE 3 SELECTED" : "SELECT CIRCLE 3"}</button>
            <button name="buttonFour" className={(props.buttonFour) ? "selected" : ""} onClick={props.handleButtonFour}>{(props.buttonFour) ? "CIRCLE 4 SELECTED" : "SELECT CIRCLE 4"}</button>
        </div>
    )
}

export default CircleSelector