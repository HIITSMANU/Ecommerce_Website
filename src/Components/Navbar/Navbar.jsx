import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/Context";

const Navbar = () => {
    const { cartItem } = useContext(ShopContext);
    const [cartCount, setCartCount] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        // Calculate total number of items in the cart
        const totalCount = Object.values(cartItem).reduce((acc, quantity) => acc + quantity, 0);
        setCartCount(totalCount);
    }, [cartItem]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    const closeAll = () => {
        setShowMenu(false);
        setShowLogin(false);
        setShowCart(false);
    };

    return (
        <div className="Navbar">
            <div className="nav_logo">
                <img src={logo} alt="Shopper" />
                <p>SHOPPER</p>
            </div>
            <div className="hamburger_menu" onClick={toggleMenu}>
                <div className={`line ${showMenu ? "line1_open" : ""}`}></div>
                <div className={`line ${showMenu ? "line2_open" : ""}`}></div>
                <div className={`line ${showMenu ? "line3_open" : ""}`}></div>
            </div>
            <ul className={`nav_menu ${showMenu ? "show_menu" : ""}`}>
                <li onClick={closeAll}><Link style={{ textDecoration: "none" }} to='/'>SHOP</Link></li>
                <li onClick={closeAll}><Link style={{ textDecoration: "none" }} to='/mens'>MEN</Link></li>
                <li onClick={closeAll}><Link style={{ textDecoration: "none" }} to='/womens'>WOMEN</Link></li>
                <li onClick={closeAll}><Link style={{ textDecoration: "none" }} to='/kids'>KIDS</Link></li>
            </ul>
            <div className={`nav_login_cart ${showLogin || showCart ? "show_login_cart" : ""}`}>
                <Link to='/loginsignup' onClick={toggleLogin}><button>Login</button></Link>
                <Link to='/cart' onClick={toggleCart}><img src={cart_icon} alt="carts" /></Link>
                <div className="nav_cart_icon">
                    {cartCount > 0 && <div className="nav_cart_count">{cartCount}</div>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
