import React from 'react'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import LandImageDiv from '../Components/LandImageDiv'
import Artical from '../Components/Artical'
import InstaPicCard from '../Components/InstaPicCard'
import SmallCard from '../Components/SmallCard'
import PageSwitcher from '../Components/PageSwitcher'

function Blog() {
    return (
        <>
            <Header />

            <LandImageDiv img="../../src/assets/images/hero-image1.jpg" pageName="Blog page" name1="Home /" name2="Blog" />
            <section id="latest-blog" className="post-grid padding-large">
                <div className="container">
                    <div className="d-flex flex-wrap row">
                        <Artical
                            link="single-post.html"
                            img="../../src/assets/images/post-img1.jpg"
                            day="22"
                            month="Aug-2021"
                            text="Top 10 casual look ideas to dress up your kids"
                            category="Fashion"
                        />
                        <Artical
                            link="single-post.html"
                            img="../../src/assets/images/post-img2.jpg"
                            day="25"
                            month="Aug-2021"
                            text="Latest trends of wearing street wears supremely"
                            category="Trending"
                        />
                        <Artical
                            link="single-post.html"
                            img="../../src/assets/images/post-img3.jpg"
                            day="28"
                            month="Aug-2021"
                            text="types of comfortable clothes ideas for women"
                            category="Inspiration"
                        />
                        <Artical
                            link="single-post.html"
                            img="../../src/assets/images/post-img3.jpg"
                            day="28"
                            month="Aug-2021"
                            text="types of comfortable clothes ideas for women"
                            category="Inspiration"
                        />
                        <Artical
                            link="single-post.html"
                            img="../../src/assets/images/post-img1.jpg"
                            day="22"
                            month="Aug-2021"
                            text="Top 10 casual look ideas to dress up your kids"
                            category="Fashion"
                        />
                        <Artical
                            link="single-post.html"
                            img="../../src/assets/images/post-img2.jpg"
                            day="25"
                            month="Aug-2021"
                            text="Latest trends of wearing street wears supremely"
                            category="Trending"
                        />
                    </div>
                    <PageSwitcher />
                </div>
            </section>

            <section id="brand-collection" className="bg-light-grey padding-medium">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between">
                        <img src="../../src/assets/images/brand1.png" alt="phone" className="brand-image" />
                        <img src="../../src/assets/images/brand2.png" alt="phone" className="brand-image" />
                        <img src="../../src/assets/images/brand3.png" alt="phone" className="brand-image" />
                        <img src="../../src/assets/images/brand4.png" alt="phone" className="brand-image" />
                        <img src="../../src/assets/images/brand5.png" alt="phone" className="brand-image" />
                    </div>
                </div>
            </section>

            <section id="instagram" className="padding-large">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Follow our instagram</h2>
                    </div>
                    <p>Our official Instagram account <a href="#">@ultras</a> or <a href="#">#ultras_clothing</a>
                    </p>
                    <div className="d-flex flex-wrap justify-content-between row">
                        <InstaPicCard link="../../src/assets/images/insta-image1.jpg" />
                        <InstaPicCard link="../../src/assets/images/insta-image2.jpg" />
                        <InstaPicCard link="../../src/assets/images/insta-image3.jpg" />
                        <InstaPicCard link="../../src/assets/images/insta-image4.jpg" />
                        <InstaPicCard link="../../src/assets/images/insta-image5.jpg" />
                        <InstaPicCard link="../../src/assets/images/insta-image6.jpg" />
                    </div>
                </div>
            </section>

            <section id="shipping-information">
                <hr />
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-center row">
                        <SmallCard icon="icon icon-truck" bolt="Free shipping" light="Over $200" />
                        <SmallCard icon="icon icon-return" bolt="Money back" light="Return within 7 days" />
                        <SmallCard icon="icon icon-tags1" bolt="Buy 4 get 5th" light="50% off" />
                        <SmallCard icon="icon icon-help_outline" bolt="Any questions?" light="experts are ready" />
                    </div>
                </div>
                <hr />
            </section>

            <Footer />
        </>
    )
}

export default Blog