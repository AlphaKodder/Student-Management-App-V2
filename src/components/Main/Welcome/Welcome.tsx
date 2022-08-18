import "./Welcome.css";

import React from "react";
import WebsiteLogo from "../../res/page-logo.png";

const Welcome = ()=>{

    return(
        <div className="welcome-text-container">
            <p className="welcome-text">Welcome to the student management app!</p>
            <img src={WebsiteLogo} width="200px" />
        </div>
    )
}   

export default Welcome;