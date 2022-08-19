import "./Groups.css";

import Button from "../../Button/Button";
import Dropdown from "../../Dropdown/Dropdown";
import NumberInput from "../../NumberInput/NumberInput";
import React from "react";

const Groups = ()=>{
    
    const studentsMockedData = [
        {
            "nume":"Stanculescu",
            "prenume":"Daniel",
            "anStudii":2,
            "grupa":4
        },
        {
            "nume":"Popescu",
            "prenume":"Ionel",
            "anStudii":2,
            "grupa":4
        },
        {
            "nume":"Ioanide",
            "prenume":"Andrei",
            "anStudii":2,
            "grupa":4
        },
        {
            "nume":"Ioanide",
            "prenume":"Andrei",
            "anStudii":2,
            "grupa":4
        },
        {
            "nume":"Ioanide",
            "prenume":"Andrei",
            "anStudii":2,
            "grupa":4
        },
        {
            "nume":"Ioanide",
            "prenume":"Andrei",
            "anStudii":2,
            "grupa":4
        },
        {
            "nume":"Ioanide",
            "prenume":"Andrei",
            "anStudii":2,
            "grupa":4
        }
    ];

    return(
        <div className="students-card-container">
            <h1>Group Table</h1>
            {/* <Button style={{"backgroundColor":"#FFC132","marginBottom":"20px"}}text="Add Grupa"></Button> */}
            {/* <div className="add-student-form">
                <input type="text" className="form-text-input" id="firstName" placeholder="Numar Grupa"/>
                <input type="text" className="form-text-input" id="lastName" placeholder="Profil"/>                
                <div className="number-input-group">
                    <div className="">
                        <p className="form-section-title">An Studii</p>
                        <NumberInput/>
                    </div>
                </div>
                <Button style={{"backgroundColor":"#000","color":"#fff"}} text="Add Grupa"></Button>
                <Button style={{"backgroundColor":"#F05B40","color":"#fff"}} text="Cancel"></Button>
            </div> */}
           {/* <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Numar</th>
                    <th>Profil</th>
                    <th>An Studii</th>
                </tr>
                </thead>
                <tbody>
             
                    
                </tbody>
                </table>
           </div>  */}
        </div>
    );
};

export default Groups;
