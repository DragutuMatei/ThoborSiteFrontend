import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar" id="myNavbar">
      <li className="not-displayed">
        <Link to="/">
          <img
            src={require("../../assets/Images/logo.png").default}
            alt="logo"
            className="logo"
          />
        </Link>
      </li>
      <div className="nothing">
      <li className="not-displayed" onClick={myFunction}>
        <NavLink end to="/">
          HOME
        </NavLink>
      </li>
      <li className="not-displayed" onClick={myFunction}>
        <NavLink end to="/blog">
          BLOG
        </NavLink>
      </li>
      <li className="not-displayed" onClick={myFunction}>
        <NavLink end to="/awards">
          AWARDS
        </NavLink>
      </li>
      <li className="not-displayed" onClick={myFunction}>
        <NavLink end to="/alumni">
          ALUMNI
        </NavLink>
      </li>
      <li className="not-displayed" onClick={myFunction}>
        <NavLink end to="/about">
          ABOUT
        </NavLink>
      </li>
      <li className="not-displayed" onClick={myFunction}>
        <NavLink end to="/contact">
          CONTACT
        </NavLink>
      </li>
      </div>
      <li className="icon" onClick={myFunction}>
        <FontAwesomeIcon icon={faBars} />
      </li>
    </div>
  );
}

function myFunction() {
  const x = document.getElementById("myNavbar");
  if(x?.className === "navbar") {
    x.className += " responsive";
  } else {
    x!.className = "navbar";
  }
}

export default Navbar;
