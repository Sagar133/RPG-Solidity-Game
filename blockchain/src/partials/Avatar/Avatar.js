import React from "react";
import "./avatar.css";

function Avatar(props){
    return(
        <>
        <div className="container1">
            <div className="icon"></div> 
            <div className="conn">Welcome <span className="addr">{props.address}</span>
            <span className="address"><b>Welcome</b>, {props.address}</span></div>
            
        </div>
        </>
    )
}

export default Avatar;