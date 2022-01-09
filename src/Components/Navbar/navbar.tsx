import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div className="navbar">
      <li>
        <img
          src={require("../../assets/Images/logo.png").default}
          alt="logo"
          className="logo"
        />
      </li>
      <li>
        <NavLink end to="/">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink end to="/blog">
          BLOG
        </NavLink>
      </li>
      <li>
        <NavLink end to="/awards">
          AWARDS
        </NavLink>
      </li>
      <li>
        <NavLink end to="/login">
          LOGIN
        </NavLink>
      </li>
      <li>
        <NavLink end to="/register">
          REGISTER
        </NavLink>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCoUzT42Ce6f_11ICDef3svA">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
      <li>
        <a href="https://ro-ro.facebook.com/ThoborCNCH/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/thoborcnch/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
    </div>
  );
}

export default Navbar;
