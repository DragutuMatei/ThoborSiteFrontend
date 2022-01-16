import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <li className="displayed">
        <Link to="/">
          <img
            src={require("../../assets/Images/logo.png").default}
            alt="logo"
            className="logo"
          />
        </Link>
      </li>
      <li className="not-displayed">
        <NavLink end to="/">
          HOME
        </NavLink>
      </li>
      <li className="not-displayed">
        <NavLink end to="/blog">
          BLOG
        </NavLink>
      </li>
      <li className="not-displayed">
        <NavLink end to="/awards">
          AWARDS
        </NavLink>
      </li>
      <li className="not-displayed">
        <NavLink end to="/alumni">
          ALUMNI
        </NavLink>
      </li>
      <li className="not-displayed">
        <NavLink end to="/login">
          LOGIN
        </NavLink>
      </li>
      <li className="not-displayed">
        <NavLink end to="/register">
          REGISTER
        </NavLink>
      </li>
      <li className="not-displayed">
        <a href="https://www.youtube.com/channel/UCoUzT42Ce6f_11ICDef3svA">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
      <li className="not-displayed">
        <a href="https://ro-ro.facebook.com/ThoborCNCH/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li className="not-displayed">
        <a href="https://www.instagram.com/thoborcnch/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li className="icon">
        <FontAwesomeIcon icon={faBars} />
      </li>
    </div>
  );
}

export default Navbar;
