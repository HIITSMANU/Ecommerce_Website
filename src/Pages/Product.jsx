import React, { useContext } from "react";
import {ShopContext} from "../Context/Context"
import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/DescriptionBox/Description";
import Relatedproducts from "../Components/RelatedProducts/Relatedproduct";
const Product = () =>{
    const {prod_data} = useContext(ShopContext)
    const {productId} = useParams();
    const prodno = Number(productId);
    const product = prod_data.find((e)=>
    e.id === prodno);

console.log(product);
    return(
        <div>
            <Breadcrumb product={product}/>
            <ProductDisplay product={product}/>
            <Description/>
            <Relatedproducts/>
        </div>
    )
}
export default Product;