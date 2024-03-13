import React, { createContext, useState } from "react";
import prod_data from "../Components/Assets/all_product"
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {}
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

export const ShopContextProvider = (props) =>{
    const [cartItem,setcartItem] = useState(getDefaultCart())

    const addTocart = (itemid) =>{
        setcartItem((prev)=>({
            ...prev,
            [itemid]: prev[itemid] +1 
        }))
    }
    const removefromcart = (itemid) =>{
        setcartItem((prev)=>({
            ...prev,
            [itemid]: prev[itemid] -1 
        }))
    }
    console.log(cartItem);
    const shopVal = {prod_data,cartItem,addTocart,removefromcart}
 

    return(
        <ShopContext.Provider value={shopVal} >  
            { props.children } 
        </ShopContext.Provider>
    )
}