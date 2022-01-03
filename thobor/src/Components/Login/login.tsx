import './login.scss';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Login() {
    return(
       <div className="login_form">
           <h1>Welcome</h1>
           <img src={require("../Images/icon.png").default} alt="logo"/>
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

                    <span>Don't have an account? <b>Sign up</b></span>
           </form>
       </div>
    );
}


export default Login;