import React from "react";
import "./CSS/loginsignup.css"
const Login = () =>{
    return(
        <div className="login">
            <div className="loginContainer">
                <h1>LogIn</h1>
                <div className="login_fields">
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <div className="login_agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing , i agree to the terms and policy</p>
                </div>
            </div>
        </div>
    )
}
export default Login;