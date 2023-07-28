import React from "react";
import talently1 from "./talently1.png";
import talently2 from "./talently2.png";
import "./Header.css";

const Header = () => {
    return(
        <div className="header">    
            {/* <div className="logos">
                <img className="logoImg" src={talently1} alt="logo"/>
                <img className="logoImg" src={talently2} alt="logo"/>
            </div> */}
            <div className="heading">
                <p>Automate Talentely - A Talentely Completion Service</p>
            </div>
        </div>
    )
}

export default Header;