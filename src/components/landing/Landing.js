import React from "react";
import "./Landing.css";
import LogoBig from "../../images/logo-big.png";
import Arrow from "../../images/arrow-down.png";
import Vector from "../../images/home-vector.png";
import Star from '../../images/star.png';
import Home1 from '../../images/home-1.png';
import Home2 from '../../images/home-2.png';
import Home3 from '../../images/home-3.png';
import Vector2 from '../../images/home-vector-2.png'

function Landing() {
  return (
    <div className="landing">
      <div className="landing-container">
        <img className="vector" src={Vector} />
        <img className="vector2" src={Vector2} />
        <div className="landing-left">
          <div style={{display:'flex'}}><p style={{color:'var(--blue)',fontWeight:'700',fontSize:'18px'}}>* Jump start your career</p></div>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            penatibus dolor, dignissim sit orci faucibus hendrerit pellentesque
            sem. Ultrices vitae habitasse quam ac tortor duis.
          </p>
          <button>Let's Talk</button>
        </div>
        <div className="landing-right">
          <img src={Home1}/>
          <img style={{marginBottom:'-10vh'}} src={Home2}/>
          <img style={{marginTop:'-10vh'}} src={Home3}/>
        </div>
      </div>
      <img className="arrow" src={Arrow} />
    </div>
  );
}

export default Landing;
