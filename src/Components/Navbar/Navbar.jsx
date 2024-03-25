import React, { useContext, useState,useEffect } from "react";
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/Context";
const Navbar = () =>{
    const { cartItem } = useContext(ShopContext);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        // Calculate total number of items in the cart
        const totalCount = Object.values(cartItem).reduce((acc, quantity) => acc + quantity, 0);
        setCartCount(totalCount);
    }, [cartItem]);



    const[menu,setMenu] = useState("shop")
    return(
        <div className="Navbar">
            <div className="nav_logo">
                <img src={logo} alt="Shopper" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav_menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to='/'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none"}} to='/mens'>MEN</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none"}} to='/womens'>WOMEN</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to='/kids'>KIDS</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav_login_cart">
                 <Link to='/loginsignup'><button>Login</button></Link>
                 <Link to='/cart'><img src={cart_icon} alt="carts" /></Link>
                 <div className="nav_cart_icon">
                        {cartCount > 0 && <div className="nav_cart_count">{cartCount}</div>}
                    </div>
            </div>
        </div>
    )
}
export default Navbar