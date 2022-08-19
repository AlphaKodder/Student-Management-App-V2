import Button from "../../Button/Button";
import NumberInput from "../../NumberInput/NumberInput";
import React from "react";

const Teachers = ()=>{
    return(
        <div className="students-card-container">
        <h1>Teachers </h1>
        {/* <Button style={{"backgroundColor":"#FFC132","marginBottom":"20px"}}text="Add Course"></Button> */}
        <div className="add-student-form">
            <input type="text" className="form-text-input" id="firstName" placeholder="Nume"/>  
            <input type="text" className="form-text-input" id="firstName" placeholder="Prenume"/>
            <input type="text" className="form-text-input" id="firstName" placeholder="Titulatura"/>           
            <Button style={{"backgroundColor":"#000","color":"#fff"}} text="Add Profesor"></Button>
            <Button style={{"backgroundColor":"#F05B40","color":"#fff"}} text="Cancel"></Button>
        </div>
       {/* <div className="table-container">
        <table>
            <thead>
            <tr>
                <th>Nume</th>
                <th>Prenume</th>
                <th>Titulatura</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
       </div>  */}
    </div>
    );
}

export default Teachers;