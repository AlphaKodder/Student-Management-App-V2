import "./Button.css"

import React from "react";

interface ButtonProps {
    text:String,
    style:React.CSSProperties
}

const Button = (props:ButtonProps)=>{

    return(
        <button style={props.style} className="action-button">
            {props.text}
        </button>
    )
}

export default Button;