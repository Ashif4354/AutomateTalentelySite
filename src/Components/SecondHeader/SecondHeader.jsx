import React from "react";
import "./SecondHeader.css";

const SecondHeader = ({ title }) => {
    return(
        <div className="SecondHeader">
            <p>{title}</p>
        </div>
    )
}

export default SecondHeader;