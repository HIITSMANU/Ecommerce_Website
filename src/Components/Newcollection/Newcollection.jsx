import React from "react";
import "./Newcollection.css";
import collect from "../Assets/new_collections";
import Item from "../Item/Item";

const Newcollection = () => {
    return (
        <div className="container new_collection">
            <h1 className="display-4 text-center mb-4">NEW COLLECTION</h1>
            <hr className="w-50 mx-auto mb-4" />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 justify-content-center cards">
                {collect.map((item, i) => (
                    <div key={i} className="col">
                        <Item
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Newcollection;
