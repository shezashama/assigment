import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { CartContext } from '../context/CartContext';

function ShopCart() {
    const { cart, updateQuantity, removeFromCart, total } = useContext(CartContext);

    const handleQuantityChange = (item, increment) => {
      const newQuantity = item.quantity + increment;
      if (newQuantity > 0) {
        updateQuantity(item._id, newQuantity);
      }
    };
  
    return (
      <>
        <Header />
        <div className="container">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item._id} className="cart-item">
                  <img src={item.img} alt={item.productName} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.productName}</h3>
                    <p>Price: ${item.price}</p>
                    <div className="cart-item-quantity">
                      <button onClick={() => handleQuantityChange(item, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                    </div>
                    <p>Subtotal: ${item.subtotal}</p>
                    <button onClick={() => removeFromCart(item._id)}>Remove</button>
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <h3>Total: ${total}</h3>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </>
    );
}

export default ShopCart;