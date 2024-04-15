import React from "react";
import "./Hero.css";
import video from "../Assets/Welcome-to-Cambridge.mp4"
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero_video">
                <video src={video} autoPlay muted loop > 
                </video>
            </div>
            <div className="hero_text">
                <h2 className="text-white font-weight-bold">NEW ARRIVALS ONLY</h2>
                <div className="text-white">
                    <p>NEW Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero_latest">
                    <div className="text-white bgp">Latest Collections</div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
