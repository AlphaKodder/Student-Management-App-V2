import "./Students.css";

import Button from "../../Button/Button";
import Dropdown from "../../Dropdown/Dropdown";
import NumberInput from "../../NumberInput/NumberInput";
import React from "react";

const Students = ()=>{
    
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
            <h1>Students Table</h1>
            <Button style={{"backgroundColor":"#FFC132","marginBottom":"20px"}}text="Add Student"></Button>
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
           <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Nume</th>
                    <th>Prenume</th>
                    <th>An Studii</th>
                    <th>Grupa</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {studentsMockedData.map((st,ind)=>{
                    return(
                     <React.Fragment>
                        <tr key={ind}>
                            {/* <td>{st.nume}</td>
                            <td>{st.prenume}</td>
                            <td>{st.anStudii}</td>
                            <td>{st.grupa}</td>
                            <td><Button text="Edit" style={{"backgroundColor":"#F05B40","padding":"8px","marginTop":"1px","fontSize":"1.2rem"}}/></td> */}

                            <td><input type="text" className="edit-row-text-input"/></td>
                            <td><input type="text" className="edit-row-text-input"/></td>
                            <td>  
                            <NumberInput/>
                            </td>
                            <td><input type="text" className="edit-row-text-input"/></td>
                            <td><Button text="Save" style={{"backgroundColor":"#F05B40","padding":"8px","marginTop":"1px","fontSize":"1.2rem"}}/></td>
                
                        </tr>
                        <tr >
                             <th colSpan={5}>
                              <div className="student-info-section">
                                <Dropdown/>
                                <div>
                                    <div className="subject-grades-info-container">
                                        <p>Materie:<span>1</span>,<span>2</span></p>
                                        <p>Materie:<span>1</span>,<span>2</span></p>
                                    </div>
                                </div>
                              </div>
                            </th>
                        </tr>
                     </React.Fragment>
                    )
                })}
                    
                </tbody>
                </table>
           </div> 
            
        </div>
    );
};

export default Students;
