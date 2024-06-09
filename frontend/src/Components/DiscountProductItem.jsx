import React from 'react'

function DiscountProductItem(props) {
    return (
        <>
            <div className="product-item">
                <img src={props.img} alt={props.imgAlt} className="product-image" />
                <div className="cart-concern">
                    <div className="d-flex justify-content-between align-items-center cart-button">
                        <button type="button" className="d-flex align-items-center btn-wrap cart-link">add to cart <i className="icon-arrow-io icon"></i>
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
                <div className="discount">{props.discount} Off</div>
                <div className="product-detail">
                    <h3 className="product-title">
                        <a href={props.link}>{props.title}</a>
                    </h3>
                    <div className="item-price text-primary">
                        <del className="prev-price">Rs.{props.prevprice}</del>Rs.{props.price}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscountProductItem