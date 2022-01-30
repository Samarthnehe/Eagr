import React from "react";
import "./Journey.css";
import Pic1 from "../../images/j1.png";
import Pic2 from "../../images/j2.png";
import Pic3 from "../../images/j3.png";

function Journey() {
  return (
    <div className="journey" id="journey">
      <div className="jcircle1">
        .
      </div>
      <div className="jcircle2">
        .
      </div>
      <div className="jcircle3">
        .
      </div>
      <div className="jcircle4">
        .
      </div>
      <div className="journey-container">
        <div className="journey-images">
          <div className="pic-top">
            <img src={Pic2} width="45%" height="45%" style={{zIndex:10,marginTop:'8vh',marginRight:'5vh',borderRadius:'20px'}}/>
            <img src={Pic1} width="35%" height="35%"/>
          </div>

          <img src={Pic3} width="65%" height="65%" style={{zIndex:5,marginLeft:'10vh',marginTop:'-10vh',borderRadius:'20px'}}/>
        </div>
        <div className="journey-desc">
          <div className="journey-info">
            <h1>OUR JOURNEY</h1>
            <div className="journey-lines">
                <div style={{height:'1px',width:'33%',backgroundColor:'var(--red)'}}></div>
                <div style={{height:'1px',width:'33%',backgroundColor:'var(--yellow)'}}></div>
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
