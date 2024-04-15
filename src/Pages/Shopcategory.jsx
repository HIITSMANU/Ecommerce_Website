import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/Context";
import Item from "../Components/Item/Item";
import "./CSS/Shopcategory.css";

const Shopcategory = (props) => {
    const { prod_data } = useContext(ShopContext);
    const [selectedRange, setSelectedRange] = useState("All");
    const [filteredData, setFilteredData] = useState([...prod_data]);
    const [showPopup, setShowPopup] = useState(false);
    const [isNoProducts, setIsNoProducts] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility

    const handleRangeChange = (range) => {
        setSelectedRange(range);
        if (range === "All") {
            setFilteredData(prod_data.filter(item => item.category === props.category));
        } else {
            const [min, max] = range.split("-");
            const filtered = prod_data.filter(
                (item) =>
                    props.category === item.category &&
                    item.new_price >= parseInt(min) &&
                    item.new_price <= parseInt(max)
            );
            setFilteredData(filtered);
            if (filtered.length === 0) {
                setIsNoProducts(true);
            } else {
                setIsNoProducts(false);
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 500); // Hide the popup after 2 seconds
            }
        }
    };

    return (
        <div className="shop_banner">
            <img style={{ marginTop: "70px" }} src={props.banner} width={1300} alt="" />
            <div className="shop_index_sort">
                Showing 1-{filteredData.length} out of {prod_data.length}
                <div className="shopcategory_sort">
                    {/* Dropdown menu */}
                    <div
                        className="dropdown"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        Sort by ∨
                        {isDropdownOpen && (
                            <div className="dropdown-content">
                                <button onClick={() => handleRangeChange("All")}>All</button>
                                <button onClick={() => handleRangeChange("0-50")}>$0 - $50</button>
                                <button onClick={() => handleRangeChange("51-100")}>$51 - $100</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {showPopup && !isNoProducts && (
                <div className="popup green">Sorted according to {selectedRange}</div>
            )}
            {isNoProducts && (
                <div className="popup red">No products found for {selectedRange}</div>
            )}
            <div className="shopcategory_products">
                {filteredData.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shopcategory;
