import React from "react";
import "../styles/Footer.css";
import logo from "../image/logo.png";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="foot-content">
          <h1>Subscribe to Our Awesome Monthly Newsletter</h1>
          <p>we usually dont spam, but sent you interesting...</p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email Addres" />
            <input type="submit" id="submit" value="Subscribe to Newsletter" />
          </form>
        </div>
      </div>
      <hr />
      <div className="container" id="foot-last-res">
        <div id="foot-nav">
          <a id="foot-logo" className="m-0" href="#">
            <img src={logo} alt="LOGO" />
          </a>
          <nav className="m-0">
            <div id="foot-list">
              <ul>
                <li>
                  <NavLink to="/" className="m-0">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Classes" className="m-0">
                    Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/OurGym" className="m-0">
                    Our Gym
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Gallery" className="m-0">
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Contactus" className="m-0">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="foot-last">
          <p>
            (C) 2017. All Rights Reserved. <a>FitnezTheme</a>. Designed by{" "}
            <a>Template.net</a>
          </p>
        </div>
        <div className="author">
          <p>
            Designed and developed by <strong>Srirammohan</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
