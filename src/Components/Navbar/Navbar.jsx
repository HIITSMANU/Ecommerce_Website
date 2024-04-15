import React, { useContext, useState, useEffect } from "react";
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="Shopper" />
                    <span>SHOPPER</span>
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className={`navbar-toggler-icon ${showMenu ? "open" : ""}`}></span>
                </button>
                <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" onClick={closeAll}>
                            <Link className="nav-link" to='/'>SHOP</Link>
                        </li>
                        <li className="nav-item" onClick={closeAll}>
                            <Link className="nav-link" to='/mens'>MEN</Link>
                        </li>
                        <li className="nav-item" onClick={closeAll}>
                            <Link className="nav-link" to='/womens'>WOMEN</Link>
                        </li>
                        <li className="nav-item" onClick={closeAll}>
                            <Link className="nav-link" to='/kids'>KIDS</Link>
                        </li>
                    </ul>
                </div>
                <div className={`d-flex ${showLogin || showCart ? "show" : ""}`}>
                    <Link to='/loginsignup' onClick={toggleLogin} className="me-3">
                        <button className="btn btn-outline-dark">Login</button>
                    </Link>
                    <Link to='/cart' onClick={toggleCart}>
                        <img src={cart_icon} alt="cart" className="cart-icon" />
                    </Link>
                    {cartCount > 0 && (
                        <div className="nav_cart_count">{cartCount}</div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
