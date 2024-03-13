import React from "react";
import prod_data from "../Assets/data"
import Item from "../Item/Item";
import "./Relatedproduct.css";
const Relatedproducts = () =>{
    return(
        <div className="related_product">
            <h1>Related Products</h1>
            <hr />
        <div className="related_products">
        {
            prod_data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
        </div>
        </div>
    )
}
export default Relatedproducts;