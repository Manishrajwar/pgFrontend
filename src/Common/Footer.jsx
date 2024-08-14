import React from "react";
import "./common.css";


function Footer() {
  return (
    <footer className="footerwrap">
      <div className="footecont">
        
        <div className="footercdetails">
          {/* frist section */}
          <div className="fotsec2">
            <label>
              <h3>Call Us</h3>
              <p>+91 XXXXXXXXXX</p>
            </label>

            <label>
              <h3>Email</h3>
              <p>abctourism@gmail.com</p>
            </label>
          </div>

          <div className="fotsec1">
            <label>
              <h3>About Us</h3>
              <p>Our Story</p>
              <p>Travel Blogs & tips</p>
              <p>Working with Us</p>
              <p>Be Our Partner</p>
            </label>
          </div>

          <div className="fotsec1">
            <label>
              <h3>Support</h3>
              <p>Customer Support</p>
              <p>Privacy & policy</p>
              <p>Contact Channels</p>
            </label>
          </div>

          <div className="fotsec1">
            <label>
              <h3>Pay Safely With Us</h3>
              <p className="adwidth">
                The payment is encrypted and transmitted securely with an SSL
                protocol.
              </p>
            </label>
          </div>
        </div>

    
      </div>
    </footer>
  );
}

export default Footer;
