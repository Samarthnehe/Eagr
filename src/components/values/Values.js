import React from "react";
import "./Values.css";
import Flash from "../../images/flash-on.svg";
import Vector from '../../images/about-vector-2.png'

function Values() {
  return (
    <div className="value">
      <div className="value-container">
      <img className="vector" src={Vector}/>
        <h1 className="head">OUR VALUES</h1>
        <div className="value-boxes">
          {[...Array(3)].map((item, idx) => {
            return (
              <div className="value-box">
                <img src={Flash} />
                <h1>Faster</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisis lobortis egestas quisque pretium, elementum{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Values;
