import React from "react";
import "./Item.css"
const Item = (props) =>{
    return(
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item_prices">
                <div className="item_prices_new">{props.new_price}</div>
                <div className="item_prices_odd">{props.old_price}</div>
            </div>
        </div>
    )
}
export default Item;