import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import './CartItem.css';

const CartItem = () => {
  const { prod_data, cartItem, addTocart, removefromcart } = useContext(ShopContext);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [couponAppliedMessage, setCouponAppliedMessage] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null); // New state for selected size preference

  useEffect(() => {
    let total = 0;
    prod_data.forEach((product) => {
      if (cartItem[product.id] > 0) {
        total += product.new_price * cartItem[product.id];
      }
    });
    setSubtotal(total);
  }, [cartItem, prod_data]);

  const notify = (message) =>
    toast.error(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notify_good = (message) =>
    toast.success(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleRemoveFromCart = (productId) => {
    removefromcart(productId);
    notify('Item removed from the cart');
  };

  const handleApplyPromoCode = () => {
    if (promoApplied) {
      setCouponAppliedMessage('Coupon already applied');
    } else if (promoCode === 'qwerty123') {
      setPromoApplied(true);
      setCouponAppliedMessage('Coupon applied');
      notify_good('Coupon applied');
    } else {
      notify('Invalid promo code');
    }
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > cartItem[productId]) {
      addTocart(productId, quantity - cartItem[productId]);
    } else if (quantity < cartItem[productId]) {
      removefromcart(productId, cartItem[productId]);
    }
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    // You can perform additional actions here if needed
  };

  const cartIsEmpty = Object.values(cartItem).every((quantity) => quantity === 0);

  const discount = promoApplied ? subtotal * 0.2 : 0;

  return (
    <div>
      {cartIsEmpty ? (
        <div className="main666">
        <div>
          <div className="u666">
            <div>
              <div className="v666">
                <div className="w666">
                  <div className="gif">
                    <img src="https://assets.cltstatic.com/images/responsive/empty-trail-cart.gif" />
                  </div>
                </div>
                <div>
                  <div className="x666">There is nothing here!</div>
                  <div className="y666">Let's do some retail therapy.</div>
                </div>
              </div>
              <div className="shopbutton">
                <a href="/" className="home1234">
                  <button className="but5666" content="START SHOPPING">
                    START SHOPPING
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      ) : (
        <div className="cart_item">
          <div className="cart_item_format_main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {prod_data.map((product) => {
            if (cartItem[product.id] > 0) {
              return (
                <div key={product.id}>
                   <div className="cartitem_format cart_item_format_main">
                    <img src={product.image} alt="" className="cart_product_icon" />
                    <p>{product.name}</p>
                    <p>${product.new_price}</p>
                    <input
                      type="number"
                      min="1"
                      value={cartItem[product.id]}
                      onChange={(event) => handleQuantityChange(product.id, parseInt(event.target.value))}
                    />
                    <p>${product.new_price * cartItem[product.id]}</p>
                    <img
                      src={remove_icon}
                      onClick={() => handleRemoveFromCart(product.id)}
                      alt=""
                      className="remove"
                    />
                  </div>

                  <hr />
                </div>
              );
            }
            return null;
          })}
          <div className="cartitems_down">
             <div className="cart_totals">
              <h1>Cart Totals</h1>
              <div>
                <div className="cart_total_item">
                  <p>Subtotal</p>
                  <p>${subtotal}</p>
                </div>
                <hr />
                <div className="cart_total_item">
                  <p>Discount</p>
                  <p>${discount}</p>
                </div>
                <hr />
                <div className="cart_total_item">
                  <p>Total</p>
                  <p>${subtotal - discount}</p>
                </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>

            <div className="cartitem_promocode">
              <p>{couponAppliedMessage}</p>
              <p>If you have a promo code, enter it here:</p>
              <div className="cartitem_promobox">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button onClick={handleApplyPromoCode}>Apply</button>
              </div>
            </div>
            
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default CartItem;
