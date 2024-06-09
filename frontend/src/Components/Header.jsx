import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
function Header() {
  const { totalItems } = useContext(CartContext);
  return (
    <>
      {/* <div className="preloader-wrapper">
                <div className="preloader">
                </div>
            </div> */}

      <div className="search-popup">
        <div className="search-popup-container">
          <form role="search" method="get" className="search-form" action="">
            <input
              type="search"
              id="search-form"
              className="search-field"
              placeholder="Type and press enter"
              value=""
              name="s"
            />
            <button type="submit" className="search-submit">
              <a href="#">
                <i className="icon icon-search"></i>
              </a>
            </button>
          </form>

          <h5 className="cat-list-title">Browse Categories</h5>

          {/* <ul className="cat-list">
                        <li className="cat-list-item">
                            <a href="shop.html" title="Men Jackets">Men Jackets</a>
                        </li>
                        <li className="cat-list-item">
                            <a href="shop.html" title="Fashion">Fashion</a>
                        </li>
                        <li className="cat-list-item">
                            <a href="shop.html" title="Casual Wears">Casual Wears</a>
                        </li>
                        <li className="cat-list-item">
                            <a href="shop.html" title="Women">Women</a>
                        </li>
                        <li className="cat-list-item">
                            <a href="shop.html" title="Trending">Trending</a>
                        </li>
                        <li className="cat-list-item">
                            <a href="shop.html" title="Hoodie">Hoodie</a>
                        </li>
                        <li className="cat-list-item">
                            <a href="shop.html" title="Kids">Kids</a>
                        </li>
                    </ul> */}
        </div>
      </div>
      <header id="header">
        <div id="header-wrap">
          <nav className="border-bottom secondary-nav">
            <div className="container">
              <div className="d-flex align-items-center row">
                <div className="col-md-4 header-contact">
                  <p>
                    Let's talk! <strong>011 444 1103</strong>
                  </p>
                </div>
                <div className="text-center col-md-4 shipping-purchase">
                  <p>Free shipping on a purchase value of $200</p>
                </div>
                <div className="col-sm-12 col-md-4 user-items">
                  <ul className="d-flex justify-content-end list-unstyled">
                    <li>
                      <Link to={"/Login"}>Login</Link>
                    </li>
                    <li>
                      <Link to={"/Register"}>Sign Up</Link>
                    </li>
                    <li>
                      <Link to={'/cart'}>
                        <i className="icon icon-shopping-cart"></i>
                        {totalItems > 0 && (
                          <span className="cart-count">{totalItems}</span>
                          )}
                          </Link>
                      
                    </li>
                    {/* <li>
                      <a href="wishlist.html">
                        <i className="icon icon-heart"></i>
                      </a>
                    </li> */}
                    {/* <li className="search-item pe-3 user-items">
                      <a href="#" className="search-button">
                        <i className="icon icon-search"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <nav className="padding-small primary-nav">
            <div className="container">
              <div className="d-flex align-items-center row">
                <div className="col-lg-2 col-md-2">
                  <div className="main-logo">
                    <a href="index.html">
                      <img
                        src="../../src/assets/images/Logo Iconics-01.png"
                        alt="logo" width="100px"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10">
                  <div className="navbar">
                    <div
                      id="main-nav"
                      className="right d-flex justify-content-end stellarnav"
                    >
                      <ul className="menu-list">
                        <li className="has-sub menu-item">
                          <Link
                            to={"../Home"}
                            className="d-flex align-item-center item-anchor"
                            data-effect="Home"
                          >
                            Home
                          </Link>
                          <ul className="submenu">
                            <li>
                              <a href="index.html" className="item-anchor">
                                Home
                              </a>
                            </li>
                            <li>
                              <a href="home2.html" className="item-anchor">
                                Home v2
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link
                            to={"../AboutUs"}
                            className="item-anchor"
                            data-effect="About"
                          >
                            About
                          </Link>
                        </li>
                        {/* <li><a href="about.html" className="item-anchor active" data-effect="About">About</a></li> */}

                        <li className="has-sub menu-item">
                          <Link
                            to={"../Shop"}
                            className="d-flex align-item-center item-anchor"
                            data-effect="Shop"
                          >
                            Shop
                          </Link>
                          <ul className="submenu">
                            <li>
                              <a href="shop.html" className="item-anchor">
                                Shop
                              </a>
                            </li>
                            <li>
                              <a
                                href="shop-slider.html"
                                className="item-anchor"
                              >
                                Shop slider
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-grid.html" className="item-anchor">
                                Shop grid
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-list.html" className="item-anchor">
                                Shop list
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="single-product.html"
                                className="item-anchor"
                              >
                                Single product
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="cart.html" className="item-anchor">
                                Cart<span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="wishlist.html" className="item-anchor">
                                Wishlist
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a href="checkout.html" className="item-anchor">
                                Checkout
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                          </ul>
                        </li>

                      

                        <li className="has-sub menu-item">
                          <Link
                            to={"../Blog"}
                            className="d-flex align-item-center item-anchor"
                            data-effect="Blog"
                          >
                            Blog
                          </Link>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html" className="item-anchor">
                                Blog
                              </a>
                            </li>
                            <li>
                              <a
                                href="blog-sidebar.html"
                                className="item-anchor"
                              >
                                Blog with sidebar
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="blog-masonry.html"
                                className="item-anchor"
                              >
                                Blog masonry
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="single-post.html"
                                className="item-anchor"
                              >
                                Single post
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link
                            to={"../ContactUs"}
                            className="item-anchor"
                            data-effect="Contact"
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
