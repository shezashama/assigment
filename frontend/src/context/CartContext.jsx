import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem._id === item._id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1, subtotal: ((cartItem.quantity + 1) * cartItem.price).toFixed(2) }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1, subtotal: item.price }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem._id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart((prevCart) => {
      return prevCart.map((cartItem) => {
        if (cartItem._id === itemId) {
          const updatedSubtotal = (newQuantity * cartItem.price).toFixed(2);
          return {
            ...cartItem,
            quantity: newQuantity,
            subtotal: updatedSubtotal,
          };
        }
        return cartItem;
      });
    });
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
