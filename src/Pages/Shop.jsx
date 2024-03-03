import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offres/Offers";
import Newcollection from "../Components/Newcollection/Newcollection";
const Shop = () =>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Newcollection/>
        </div>
    )
}
export default Shop;