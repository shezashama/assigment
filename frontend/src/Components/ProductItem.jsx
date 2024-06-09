import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

const BASE_URL = 'http://localhost:5000/';

function ProductItem({ img, imgAlt, link, title, price, _id, weight }) {
  const { cart, addToCart } = useContext(CartContext);

  const formattedImgUrl = `${BASE_URL}${img.replace(/\\/g, '/')}`;

  const addToCartHandler = () => {
    const item = {
      _id,
      productName: title,
      price,
      img: formattedImgUrl,
      quantity: 1, // Default initial quantity
      subtotal: price, // Initial subtotal
    };
    addToCart(item);
  };

  console.log(cart); // To verify the cart content

  return (
    <>
      <div className="image-holder">
        <img src={formattedImgUrl} alt={imgAlt} className="product-image" />
      </div>
      <div className="cart-concern">
        <div className="d-flex justify-content-between align-items-center cart-button">
          <button
            type="button"
            className="d-flex align-items-center btn-wrap cart-link"
            onClick={addToCartHandler}
          >
            add to cart <i className="icon-arrow-io icon"></i>
          </button>
          {/* <button type="button" className="d-flex view-btn tooltip">
            <i className="icon icon-screen-full"></i>
            <span className="tooltip-text">Quick view</span>
          </button>
          <button type="button" className="wishlist-btn">
            <i className="icon icon-heart"></i>
          </button> */}
        </div>
      </div>
      <div className="product-detail">
        <h3 className="product-title">
          <Link to={link}>{title}</Link>
        </h3>
        <span className="item-price text-primary">Rs.{price}</span>
      </div>
    </>
  );
}

export default ProductItem;
