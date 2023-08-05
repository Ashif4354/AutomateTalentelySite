import React from "react";

const Header = ({ header }) => {
    return(
        <div className="PSHeader">
            <div className="SecondHeader">
                <p>{header}</p>
            </div>
        </div>
    )
}

export default Header;