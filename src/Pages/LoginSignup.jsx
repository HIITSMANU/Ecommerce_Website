import React from "react";
import "./CSS/loginsignup.css"
const LoginSignup = () =>{
    return(
        <div className="login">
            <div className="loginContainer">
                <h1>SignUp</h1>
                <div className="login_fields">
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="login_check">Already have a account ?<span> Login</span></p>
                <div className="login_agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing , i agree to the terms and policy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup;