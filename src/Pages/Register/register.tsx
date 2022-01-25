import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
  return (
    <div className="register-form">
      <div className="register-form-heading">
        <h2>Nice to meet you !</h2>
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

        <div className="inputs-icons">
        <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
        <input type="password" id="pass" name="pass" placeholder="Confirm Password" required />
        </div>

        <input type="submit" value="Register" id="submit" />
        <span className="ad"><Link to="/login">Already a member? <b>Log in</b></Link></span>
      </form>
    </div>
  );
}

export default Register;
