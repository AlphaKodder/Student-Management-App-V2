import "./index.css"

import React from "react";

type BoxProps = {
    children:React.ReactNode
 }

const Main = (props:BoxProps)=>{
    return(
        <div className="main-card">
            {props.children}
        </div>
    )

};

export default Main;