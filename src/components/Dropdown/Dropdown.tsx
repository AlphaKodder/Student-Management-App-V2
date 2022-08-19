import "./Dropdown.css"

import React from "react";

const Dropdown = ()=>{
    return(
        <div className="dropdown">
            <button className="dropdown-btn">Dropdown</button>
            <div className="dropdown-content">
                <a>Materie 1</a>
                <a>Materie 2</a>
                <a>Materie 3</a>
            </div>
        </div>
    )
};

export default Dropdown;