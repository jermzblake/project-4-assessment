import React from 'react';
import '../Circles/Circles.css'

const Circles = (props) => {
    
    return (
        <div className="Circles">
        <div className={(props.buttonOne) ? "selected" : ""} >1</div>
        <div className={(props.buttonTwo) ? "selected" : ""} >2</div>
        <div className={(props.buttonThree) ? "selected" : ""} >3</div>
        <div className={(props.buttonFour) ? "selected" : ""} >4</div>
        </div>
    )
}

export default Circles