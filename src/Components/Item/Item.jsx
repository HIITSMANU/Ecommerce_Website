import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
    return (
        <div className="item card">
            <Link to={`/product/${props.id}`} className="card-link">
                <img
                    onClick={() => window.scrollTo(0, 0)}
                    src={props.image}
                    className="card-img-top"
                    alt=""
                />
            </Link>
            <div className="card-body g-1">
                <p className="card-text">{props.name}</p>
                <div className="item_prices">
                    <div className="item_prices_new">${props.new_price}</div>
                    <div className="item_prices_old">${props.old_price}</div>
                </div>
            </div>
        </div>
    );
};

export default Item;
