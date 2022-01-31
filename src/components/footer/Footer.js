import React from 'react';
import './Footer.css';
import Logo from '../../images/logo.png';
import {Link as Link1} from 'react-scroll'

function Footer() {
  return <div className="footer">
      <div className="footer-container">
          <img src={Logo}/>
          <div className="footer-links">
          <Link1 to="about" spy={true} smooth={true}><p>ABOUT</p></Link1>
              <Link1><p>OUR PRODUCT</p></Link1>
              <Link1 to="journey" spy={true} smooth={true}><p>OUR JOURNEY</p></Link1>
              <Link1><p>TEAM</p></Link1>
              <Link1><p>BLOG</p></Link1>
              <Link1 to="contact" spy={true} smooth={true}><p>CONTACT US</p></Link1>
          </div>
          <div className="footer-line"></div>
          <p className="copyright">Copyright © 2022 EAGR Career. All rights reserved.</p>
      </div>
  </div>;
}

export default Footer;
