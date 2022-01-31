import React from "react";
import "./Talk.css";
import Logo from "../../images/logo.png";

function Talk() {
  return (
    <div className="talk">
      <div className="talk-container">
        <div className="talk-header">
          <h1>WELCOME TO</h1>
          <img src={Logo} />
        </div>
        <div className="talk-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="button">Let's Talk</button>
        </div>
      </div>
    </div>
  );
}

export default Talk;
