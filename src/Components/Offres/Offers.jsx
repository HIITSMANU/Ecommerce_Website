import React from "react";
import offer from "../Assets/exclusive_image.png"
import "./Offers.css"
const Offers = () =>{
    return(
        <div className="offer">
            <div className="offer_left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON BEST SELLER PRODUCTS</p>
                <button>check now</button>
            </div>
            <div className="offer_right">
                <img src={offer} width={250} alt="" />
            </div>

        </div>
    )
}
export default Offers;