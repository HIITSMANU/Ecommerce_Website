import React from "react";
import "./Newcollection.css";
import collect from "../Assets/new_collections"
import Item from "../Item/Item";
const Newcollection = () =>{
    return(
        <div className="new_collection">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collections">
                {collect.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>

        </div>
    )
}
export default Newcollection;