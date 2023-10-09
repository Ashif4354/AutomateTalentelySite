import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
        
        <div className="header">
            <div className="menu">
                <Link to={"/problemstatement"}><p className="menuTab">Problem Statement</p></Link>
                <Link to={"/privacypolicy"}><p className="menuTab">Privacy Policy</p></Link>
                <Link to={"/contactus"}><p className="menuTab">Contact Us</p></Link>
            </div>
            <div className="heading">
                <p>ATS - A Talentely Tests Completion Engine</p>
            </div>
        </div>
        </>
    )
}

export default Header;