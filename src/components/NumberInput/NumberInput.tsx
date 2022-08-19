import React from "react";
import "./NumberInput.css";

const NumberInput = ()=>{

    return(
    <div className="number-input-container">
        <span className="next"></span>
        <span className="prev"></span>
        <div id="box">
            <p className="number-input-value">0</p>
         </div>
    </div>
    );
}

export default NumberInput;