import React from "react";
import "./Journey.css";
import Pic1 from "../../images/j1.png";
import Pic2 from "../../images/j2.png";
import Pic3 from "../../images/j3.png";

function Journey() {
  return (
    <div className="journey" id="journey">
      <div className="journey-container">
        
        <div className="journey-desc">
          <div className="journey-info">
            <h1>OUR <span className="span">JOURNEY</span></h1>
            <div className="journey-lines">
                <div style={{height:'1px',width:'33%',backgroundColor:'var(--yellow)'}}></div>
                <div style={{height:'1px',width:'33%',backgroundColor:'var(--green)'}}></div>
                <div style={{height:'1px',width:'33%',backgroundColor:'var(--blue)'}}></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              lobortis egestas quisque pretium, elementum semper justo,
              condimentum. Erat urna risus magnis molestie scelerisque vulputate
              enim eget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
