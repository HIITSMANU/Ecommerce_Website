import React, { useContext } from "react";
import {ShopContext} from "../Context/Context"
import sort_icon from "../Components/Assets/dropdown_icon.png"
import all_product from "../Components/Assets/all_product";
import Item from "../Components/Item/Item";
import "./CSS/Shopcategory.css";
const Shopcategory = (props) =>{
    const {prod_data} = useContext(ShopContext)
    return(
        <div className="shop_banner">
            <img src={props.banner} width={1300} alt="" />
            <div className="shop_index_sort">
                Showing 1-12
            out of 36
                <div className="shopcategory_sort">
                    sort by <img src={sort_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory_products">
                {prod_data.map((item,i)=>{
                    if(props.category === item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    )
}
export default Shopcategory;