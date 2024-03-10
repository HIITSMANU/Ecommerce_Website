import React, { createContext } from "react";
import prod_data from "../Components/Assets/all_product"
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) =>{
    const shopVal = {prod_data}

    return(
        <ShopContext.Provider value={shopVal} >  
            { props.children } 
        </ShopContext.Provider>
    )
}