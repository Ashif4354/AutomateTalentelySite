import React, { useState } from "react";
import "./Header.css";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const Header = ({ heading }) => {
    const [drawer, setDrawer] = useState(false);

    const handleDrawer = (anchor) => {
      setDrawer(!drawer);
    }
    return(
        <>
        <Drawer
        anchor={"left"}
        open={drawer}
        onClose={() => handleDrawer()}
        onOpen={() => {
          console.log('HOla opened');
        }
        }
      >
        <Box
          sx={{ width: 270 }}
          role="presentation"
        >
          <div className="menu">
            <h1 style={{textAlign: 'center'}} className="menuTab1">ATS</h1>
            <br />
            <p style={{background: '#FFC113', width: '100%', padding: '30px', color: 'white', textAlign: 'center', fontSize: 'x-large', fontWeight: 500}}>{heading}</p>
            <div className="MenuContainer">
                <Link to={"/"}><p className="menuTab">Home</p></Link>
                <Link to={"/problemstatement"}><p className="menuTab">Problem Statement</p></Link>
                <Link to={"/privacypolicy"}><p className="menuTab">Privacy Policy</p></Link>
                <Link to={"/contactus"}><p className="menuTab">Developers</p></Link>
            </div>
          </div>
        </Box>
      </Drawer>
        <div className="header">
            <button className="drawerDesign" onClick={() => handleDrawer()}>
                <MenuOpenIcon fontSize="large"/>
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