import './login.scss';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function Login() {
    return(
       <div className="login_form">
           <h1>Welcome</h1>
           <img src={require("../../assets/Images/robot.png").default}/>
           <form className="text_container">
                    <label>Username/Email</label>
                    <input type="text" name="username" required />
                    <hr></hr>

                    <label>Password</label>
                    <div className="pass">
                    <input type="password" name="password" required />
                    <span><FontAwesomeIcon icon={faEye}/></span>
                    </div>
                    <hr></hr>

                    <button type="submit"><b>LOGIN</b></button>

                    <span><Link to="/register">Don't have an account? <b>Sign up</b></Link></span>
           </form>
       </div>
    );
}


export default Login;