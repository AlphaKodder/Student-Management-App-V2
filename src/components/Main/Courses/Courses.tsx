import Button from "../../Button/Button";
import NumberInput from "../../NumberInput/NumberInput";
import React from "react";

const Courses = ()=>{

    return(
        <div className="students-card-container">
        <h1>Courses </h1>
        {/* <Button style={{"backgroundColor":"#FFC132","marginBottom":"20px"}}text="Add Course"></Button> */}
        {/* <div className="add-student-form">
            <input type="text" className="form-text-input" id="firstName" placeholder="Nume Curs"/>             
            <div className="number-input-group">
                <div className="">
                    <p className="form-section-title">Credite</p>
                    <NumberInput/>
                </div>
            </div>
            <Button style={{"backgroundColor":"#000","color":"#fff"}} text="Add Curs"></Button>
            <Button style={{"backgroundColor":"#F05B40","color":"#fff"}} text="Cancel"></Button>
        </div> */}
       <div className="table-container">
        <table>
            <thead>
            <tr>
                <th>Nume Curs</th>
                <th>Credite</th>
            </tr>
            </thead>
            <tbody>
                
                
            </tbody>
          </table>
       </div> 
    </div>
    );
};

export default Courses;