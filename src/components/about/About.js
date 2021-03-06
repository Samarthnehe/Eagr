import React from "react";
import "./About.css";
import Pic1 from "../../images/about-1.png";
import Pic2 from "../../images/about-2.png";
import Pic3 from "../../images/about-3.png";
import Vector1 from '../../images/about-vector.png'

function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <img className="vector" src={Vector1}/>
        <div className="about-images">
          <div className="pic-top">
            <img
              src={Pic1}
              width="45%"
              height="45%"
              style={{ zIndex: 10, marginTop: "8vh", marginRight: "5vh" }}
            />
            <img src={Pic2} width="35%" height="35%" />
          </div>

          <img
            src={Pic3}
            width="65%"
            height="65%"
            style={{ zIndex: 5, marginLeft: "10vh", marginTop: "-10vh" }}
          />
        </div>
        <div className="about-desc">
          <div className="about-info">
            <h1>
              ABOUT <span className="span">EAGR</span>
            </h1>
            <div className="about-lines">
              <div
                style={{
                  height: "1px",
                  width: "33%",
                  backgroundColor: "var(--yellow)",
                }}
              ></div>
              <div
                style={{
                  height: "1px",
                  width: "33%",
                  backgroundColor: "var(--green)",
                }}
              ></div>
              <div
                style={{
                  height: "1px",
                  width: "66%",
                  backgroundColor: "var(--blue)",
                }}
              ></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              lobortis egestas quisque pretium, elementum semper justo,
              condimentum. Erat urna risus magnis molestie scelerisque vulputate
              enim eget.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              lobortis egestas quisque pretium, elementum semper justo,
              condimentum.
            </p>
            <button className="button">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
