import React from "react";
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import "./ProductDisplay.css"
const ProductDisplay = (props) =>{
    const {product} = props
    return(
        <div className="product_display">
            <div className="product_display_left">
                <div className="product_display_left_minor">
                    <img src={product.image} alt="product_image" />
                    <img src={product.image} alt="product_image" />
                    <img src={product.image} alt="product_image" />
                    <img src={product.image} alt="product_image" />
                </div>
                <div className="product_display_left_major">
                    <img className="product_main_img" src={product.image} alt="product_image" />
                </div>
            </div>
            <div className="product_display_right">
                <h1>{product.name}</h1>
                <div className="display_right_star_icons">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                </div>
                <p>(122)</p>
            <div className="product_display_price">
                <div className="product_display_oldprice">${product.old_price}</div>
                <div className="product_display_newprice">${product.new_price}</div>
            </div>
            <div className="product_display_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quos?
            </div>
            <div className="product_display_sizes">
                <h1>Choose Size</h1>
                <div className="product_display_sizes_chart">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                    <div>XXXL</div>
                </div>
            </div>
            <button>Add to Cart</button>
            <p className="product_choose_category"><span>Category : </span>Women , T-shirt , Croptop</p>
            <p className="product_choose_category"><span>Tags :</span>Modern , Latest</p>
        </div>
        </div>
    )
}
export default ProductDisplay