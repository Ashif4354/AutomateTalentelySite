import React from "react";
import "./Header.css";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


const Header = ({handleDrawer}) => {
    return(
        <>
        <div className="header">
            <button className="drawerDesign" onClick={() => handleDrawer()}>
                <MenuOpenIcon />
            </button>
            <div className="heading">
                <p>ATS - A Talentely Tests Completion Engine</p>
            </div>
            <div></div>
        </div>
        </>
    )
}

export default Header;