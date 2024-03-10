import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offres/Offers";
import Newcollection from "../Components/Newcollection/Newcollection";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
const Shop = () =>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Newcollection/>
            <Newsletter/>
        </div>
    )
}
export default Shop;