import React from "react";
import footer_logo from "../Assets/logo_big.png"
import insta from "../Assets/instagram_icon.png"
import pin from "../Assets/pintester_icon.png"
import what from "../Assets/whatsapp_icon.png"
import "./Footer.css"
const Footer = () =>{
    return(
        <div className ="footer">
            <div className="footer_logo">
                <img src={footer_logo} alt="footerlogo" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer_links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer_social_icon">
                <div className="footer_icon_container">
                    <img src={insta} alt="" />
                </div>
                <div className="footer_icon_container">
                    <img src={pin} alt="" />
                </div>
                <div className="footer_icon_container">
                    <img src={what} alt="" />
                </div>
            </div>
            <div className="footer_copyright">
                <hr />
                <p>|Copyright &copy;{new Date().getFullYear()} All rights reserved|</p>
            </div>

        </div>
    )
}
export default Footer;