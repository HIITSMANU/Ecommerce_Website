import React from "react";
import handicon from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero_img from "../Assets/hero_image.png"
import "./Hero.css"
const Hero = () =>{
    return(
        <div className="hero">
            <div className="hero_left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero_hand_icon">
                        <p>NEW</p>
                        <img src={handicon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero_latest">
                    <div>Latest Collection</div>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div className="hero_right">
                <img src={hero_img} width={400} alt="" />
            </div>

        </div>
    )
}
export default Hero;