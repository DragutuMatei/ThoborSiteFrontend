import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <NavLink end to="/contact">
      <button className="button">
        <span>Let's Talk</span>
      </button>
      </NavLink>
      <h6>THOBOR | Echipa de robotică a Colegiului Național “Calistrat Hogaș” Tecuci</h6>
    </div>
  );
}

export default Footer;
