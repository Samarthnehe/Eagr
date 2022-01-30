import React from "react";
import "./Contact.css";
import Location from "../../images/location-icon.png";
import Phone from "../../images/phone-icon.png";
import Message from "../../images/message-icon.png";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <h1
          style={{
            fontWeight: "600",
            textAlign: "center",
            margin: "25px 0px",
            fontSize: "40px",
          }}
        >
          Get in touch!
        </h1>
        <p style={{ fontWeight: "300", textAlign: "center", fontSize: "20px" }}>
          Contact us for a quote, help or to join the team.
        </p>
        <div className="contact-services">
          <div className="contact-box">
            <img src={Location} />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="contact-box">
            <img src={Phone} />
            <p>+91 1234567890</p>
          </div>
          <div className="contact-box">
            <img src={Message} />
            <p>desics@gmail.com</p>
          </div>
        </div>
        <div className="contact-form">
          <div className="form">
            <div className="input">
              <div className="contact-details">
                <input type="text" placeholder="Your Name"></input>
                <input type="text" placeholder="Phone Number"></input>
                <input type="text" placeholder="Your Mail ID"></input>
              </div>
              <div className="contact-message">
                <textarea placeholder="Your Message"></textarea>
              </div>
            </div>
            <div className="contact-buttonbar">
            <button>Send Message</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
