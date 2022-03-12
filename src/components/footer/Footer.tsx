import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      {/* <NavLink end to="/contact">
        <button className="button">
          <span>Let's Talk</span>
        </button>
      </NavLink> */}
      <div className="icon-list">
        <img src={require("../../assets/Images/logo-thobor.png").default} alt="ferikire"/>
        <a href="https://www.youtube.com/channel/UCoUzT42Ce6f_11ICDef3svA">
        <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.instagram.com/thoborcnch/">
        <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/ThoborCNCH/">
        <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div className="section-list">
        <h2>
          Helpful links
        </h2>
        <a href="#whatwedo">
          Whatwedo
        </a>
        <a href="#members">
          Members
        </a>
        <a href="#sponsors">
          Sponsors
        </a>
        <NavLink end to="/contact">
          <span>
            Contact
          </span>
        </NavLink>
      </div>
     </div>
  );
}

export default Footer;
