import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png"
import "./Breadcrumb.css"
const Breadcrumb = (props) =>{
    const {product} = props;
    return(
        <div className="bread">
            HOME <img src={arrow_icon}/> SHOP <img  src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name}
        </div>
    )
}   
export default Breadcrumb