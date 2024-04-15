import React, { useEffect, useState } from "react";
import "./CSS/Shop.css"; // Import CSS file with the styles mentioned above
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
// import Offers from "../Components/Offers/Offers";
import Newcollection from "../Components/Newcollection/Newcollection";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import logo from "../Components/Assets/logo.png"



const Shop = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading by setting isLoading to false after 3 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="loading-container">
                    <div className="loading-image-container">
                        <img
                            className="loading-image"
                            src={logo}
                            alt="Loading"
                        />
                        <img
                            className="loading-image"
                            src={logo}
                            alt="Loading"
                        />
                        <img
                            className="loading-image"
                            src={logo}
                            alt="Loading"
                        />
                    </div>
                </div>
            ) : (
                <>
                <Hero />
                <Popular />
                <Newcollection />
                <Newsletter />
                <Footer />
            </>
            )}
        </div>
    );
};

export default Shop;
