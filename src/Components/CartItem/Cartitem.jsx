import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import remove_icon from "../Assets/cart_cross_icon.png"
import "./CartItem.css"

const Cartitem = () => {
    const { prod_data, cartItem, removefromcart } = useContext(ShopContext)

    const notify = () => toast.error('Item removed from the cart', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const handleRemoveFromCart = (productId) => {
        removefromcart(productId);
        notify(); // Show toast when item is removed from the cart
    };

    const cartIsEmpty = Object.values(cartItem).every(quantity => quantity === 0);

    return (
        <div>
            {cartIsEmpty ? (
                <div className="main666">
            <div>
                <div className="u666">
                    <div >
                        <div className="v666">
                            <div className="w666">
                                <div className='gif' >
                                <img src="https://assets.cltstatic.com/images/responsive/empty-trail-cart.gif"/>
                                </div>
                            </div>
                            <div>
                                <div className="x666">
                                    There is nothing here!
                                </div>
                                <div className="y666">
                                Let's do some retail therapy.
                                </div>
                            </div>
                        </div>
                        <div className="shopbutton">
                        <a href='/' className="home1234">
                            <button className="but5666" content="START SHOPPING">START SHOPPING</button>
                        </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            ) : (
                <div className='cart_item'>
                    <div className="cart_item_format_main">
                        <p>Products</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    {
                        prod_data.map((e) => {
                            if (cartItem[e.id] > 0) {
                                return <div>
                                    <div className="cartitem_format cart_item_format_main">
                                        <img src={e.image} alt="" className='cart_product_icon' />
                                        <p>{e.name}</p>
                                        <p>${e.new_price}</p>
                                        <button className='cart_quantity'>{cartItem[e.id]}</button>
                                        <p>${e.new_price * cartItem[e.id]}</p>
                                        <img src={remove_icon} onClick={() => { handleRemoveFromCart(e.id) }} alt="" className='remove' />
                    
                                    </div>
                                    <hr />
                                    
                                </div>
                                
                            }
                            
                            
                        }
                        )
                    }
                    <div className="cartitems_down">
                              <div className="cart_totals">
                                <h1>Cart Totals</h1>
                              <div>
                                  <div className="cart_total_item">
                                    <p>Subtotal</p>
                                    <p>${0}</p>

                                  </div>
                                  <hr />
                                  <div className="cart_total_item">
                                    <p>Shipping Fees</p>
                                    <p>Free</p>
                                  </div>
                                  <hr />
                                  <div className="cart_total_item">
                                    <p>Total</p>
                                    <p>${0}</p>
                                  </div>
                              </div>
                          
                                    <button>PROCEED TO CHECK</button>
                          </div>
                      
                                  <div className="cartitem_promocode">
                                    <p>If you have promocode , Enter it here</p>
                                    <div className="cartitem_promobox">
                                      <input type="text" placeholder='Enter promo code' />
                                    </div>
                                  </div>
                              </div>
                      </div>
                  
            )}
            <ToastContainer />
        </div>
    )
}

export default Cartitem;
