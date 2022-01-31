import React from "react";
import "./Product.css";
import Pic1 from "../../images/about-1.png";
import Pic2 from "../../images/about-2.png";
import Pic3 from "../../images/about-3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import WebDesign from "../../images/web-design.png";

function Product() {
  return (
    <div className="product" id="product">

      <div className="product-main">
        <div className="product-container">
          <div className="product-desc">
            <div className="product-info">
              <h1>OUR <span className="span">PRODUCT</span></h1>
              <div className="product-lines">
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
                    width: "33%",
                    backgroundColor: "var(--white)",
                  }}
                ></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis lobortis egestas quisque pretium, elementum semper
                justo, condimentum. Erat urna risus magnis molestie scelerisque
                vulputate enim eget.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis lobortis egestas quisque pretium, elementum semper
                justo, condimentum. Erat urna risus magnis molestie scelerisque
                vulputate enim eget.
              </p>
            </div>
          </div>
          <div className="product-images">
            <div className="pic-top">
              <img
                src={Pic1}
                width="45%"
                height="45%"
                style={{
                  zIndex: 10,
                  marginTop: "8vh",
                  marginRight: "5vh",
                  borderRadius: "20px",
                }}
              />
              <img src={Pic2} width="35%" height="35%" />
            </div>

            <img
              src={Pic3}
              width="65%"
              height="65%"
              style={{
                zIndex: 5,
                marginLeft: "10vh",
                marginTop: "-10vh",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>

        {/* <div className="carousel-body">
          <Carousel
            autoPlay={true}
            centerMode={true}
            interval={2000}
            infiniteLoop={true}
            showArrows={true}
            showStatus={false}
            autoFocus={true}
            showThumbs={false}
          >
              {

              
            [...Array(3)].map((item,idx)=>{
                return(
                    <div className="list">
                    <div className="list-desc">
                      <h1>WEB DESIGN</h1>
                      <div className="product-lines">
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
                            width: "66%",
                            backgroundColor: "var(--white)",
                          }}
                        ></div>
                      </div>
                      <p
                        style={{
                          textAlign: "left",
                          color: "white",
                          fontFamily: "Poppins",
                          fontWeight: "300",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis massa tempor pharetra faucibus enim. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Facilisis massa
                        tempor pharetra faucibus enim. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Facilisis massa tempor pharetra
                        faucibus enim.
                      </p>
                      <div className="items">
                          <div className="item">Design</div>
                          <div className="item">Prototype</div>
                          <div className="item">MockUp</div>
                      </div>
                    
                    </div>
                    <div className="list-image">
                          <img src={WebDesign}/>
                      </div>
                  </div>
                )
            })}
          </Carousel>
        </div> */}
      </div>
    </div>
  );
}

export default Product;
