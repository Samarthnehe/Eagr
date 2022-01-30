import React from "react";
import "./Landing.css";
import LogoBig from "../../images/logo-big.png";
import Arrow from '../../images/arrow-down.png'

function Landing() {
  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-box">
          <img src={LogoBig} height="100px" width="300px" />
          <h1 className="landing-title">Lorem ipsum dolor sit amet.</h1>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            scelerisque elit arcu faucibus cursus augue sit habitasse. Aliquam
            id sed dolor porta habitasse ligula.
          </p>
        </div>
      </div>
      <img src={Arrow}/>
    </div>
  );
}

export default Landing;
