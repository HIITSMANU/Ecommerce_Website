import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"
const Item = (props) =>{
    return(
        <div className="item">
            <Link to={`/product/${props.id}`}><img src={props.image} width={250} alt="" /></Link>
            <p>{props.name}</p>
            <div className="item_prices">
                <div className="item_prices_new">${props.new_price}</div>
                <div className="item_prices_old">${props.old_price}</div>
            </div>
        </div>
    )
}
export default Item;