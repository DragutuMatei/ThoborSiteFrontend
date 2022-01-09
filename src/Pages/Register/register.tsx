import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
  return (
    <>
      <div className="register_form">
        <h1>Welcome</h1>
        <img src={require("../../assets/Images/robot.png").default} alt="logo" />
        <form className="text_container">
          <label>Username/Email</label>
          <input type="text" name="username" required />
          <hr></hr>

          <label>Password</label>
          <div className="pass">
            <input type="password" name="password" required />
            <span>
              <FontAwesomeIcon icon={faEye} />
            </span>
          </div>
          <hr></hr>

          <label>Confirm Password</label>
          <div className="pass">
            <input type="password" name="password" required />
            <span>
              <FontAwesomeIcon icon={faEye} />
            </span>
          </div>
          <hr></hr>

          <button type="submit">
            <b>SIGN UP</b>
          </button>

          <span>
            <Link to="/login">You already have an account ? <b>Log in</b></Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Register;
