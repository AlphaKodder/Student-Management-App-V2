import "./Students.css";

import Button from "../../Button/Button";
import React from "react";

const Students = ()=>{
    
    return(
        <div>
            <h1>Students Table</h1>
            {/* <Button style={{"backgroundColor":"#FFC132","marginBottom":"20px"}}text="Add Student"></Button> */}
            {/* <div className="add-student-form">
                <input type="text" className="form-text-input" id="firstName" placeholder="First Name"/>
                <input type="text" className="form-text-input" id="lastName" placeholder="Last Name"/>                
                <div className="number-input-group">
                    <div className="number-input">
                        <p className="form-section-title">Class Number</p>
                        <button className="change-number">+</button>
                        <input type="number" className="form-number-input"/>
                        <button className="change-number minus">-</button>
                    </div>
                    <div className="number-input">
                        <p className="form-section-title">Group Number</p>
                        <button className="change-number">+</button>
                        <input type="number" className="form-number-input"/>
                        <button className="change-number minus">-</button>
                    </div>
                </div>
                <Button style={{"backgroundColor":"#000","color":"#fff"}} text="Add Student"></Button>
                <Button style={{"backgroundColor":"#F05B40","color":"#fff"}} text="Cancel"></Button>
            </div> */}
            
        </div>
    );
};

export default Students;
