import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./login.scss";

function Login() {
  return (
    <div className="login-form">
      <div className="login-form-heading">
        <h2>Welcome back !</h2>
        <img src={require("../../assets/Images/robot.png").default} alt="robot"/>
      </div>
      <form>
        <div className="inputs-icons">
        <span className="icon"><FontAwesomeIcon icon={faEnvelope}/></span>
        <input type="email" id="email" name="email" placeholder="Email" required />
        </div>

        <div className="inputs-icons">
          <span className="icon"><FontAwesomeIcon icon={faLock}/></span>
        <input type="password" id="pass" name="pass" placeholder="Password" required />
        </div>

        <input type="submit" value="Login" id="submit" />
        <span className="ad"><Link to="/register">Are you new here? <b>Register</b></Link></span>
      </form>
    </div>
  );
}

export default Login;
