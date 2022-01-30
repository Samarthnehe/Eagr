import React from 'react';
import './Navbar.css';
import Logo from '../../images/logo.png';
import {Link as Link1} from 'react-scroll';
import{Link as Link2} from 'react-router-dom'  

function Navbar() {
  return <div className="navbar">
      <div className="navbar-container">
          <div className="logo">
              <img src={Logo} width="100px" height="32px"/>
          </div>
          <div className="navbar-options">
              <Link1 to="about" spy={true} smooth={true}><p>ABOUT</p></Link1>
              <Link1><p>OUR PRODUCT</p></Link1>
              <Link1><p>OUR JOURNEY</p></Link1>
              <Link1><p>TEAM</p></Link1>
              <Link1><p>BLOG</p></Link1>
              <Link1 to="contact" spy={true} smooth={true}><p>CONTACT US</p></Link1>
          </div>
      </div>
  </div>;
}

export default Navbar;
