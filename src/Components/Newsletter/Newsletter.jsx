import React from "react";
import "./Newsletter.css"
const Newsletter = () =>{
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers on Mail</h1>
            <p>Subscribe to our Newsletter</p>
            <div>
                <input type="email" placeholder="Type Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default Newsletter;