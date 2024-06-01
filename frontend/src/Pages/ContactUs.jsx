import React from 'react'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import LandImageDiv from '../Components/LandImageDiv'
import InstaPicCard from '../Components/InstaPicCard'
import SmallCardSet from '../Components/SmallCardSet'

function ContactUs() {

    const mapouter = {
        position: 'relative',
        textAlign: 'right',
        height: '500px',
        width: '100%',
    }

    const gmap_canvas = {
        overflow: 'hidden',
        background: 'none !important',
        height: '500px',
        width: '100%',
    }

    return (
        <><Header />

            <LandImageDiv img="../../src/assets/images/hero-image.jpg" pageName="Contact us" name1="Home /" name2="Contact us" />

            <section className="contact-information padding-large">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-header">
                                <h2 className="section-title">Get in touch</h2>
                            </div>
                            <div className="contact-detail">
                                <div className="detail-list">
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <ul className="list-icon list-unstyled">
                                        <li>
                                            <a href="#"><i className="icon icon-phone"></i>+1650-243-0000</a>
                                        </li>
                                        <li>
                                            <a href="mailto:info@yourcompany.com"><i className="icon icon-mail"></i>info@yourcompany.com</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-map-pin icon"></i>North Melbourne VIC 3051, Australia</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="social-links">
                                    <h3>Social Links</h3>
                                    <ul className="d-flex list-unstyled">
                                        <li><a href="#" className="icon icon-facebook"></a></li>
                                        <li><a href="#" className="icon icon-twitter"></a></li>
                                        <li><a href="#" className="icon icon-instagram"></a></li>
                                        <li><a href="#" className="icon icon-youtube-play"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-information">
                                <div className="section-header">
                                    <h2 className="section-title">Send us a message</h2>
                                </div>
                                <form name="contactform" action="contact.php" method="post" className="contact-form">
                                    <div className="form-item">
                                        <input type="text" minlength="2" name="name" placeholder="Name" className="bg-light u-full-width" required />
                                        <input type="email" name="email" placeholder="E-mail" className="bg-light u-full-width" required />
                                        <textarea className="bg-light u-full-width" name="message" placeholder="Message" style={{ height: '180px' }} required></textarea>
                                    </div>
                                    <label>
                                        <input type="checkbox" required />
                                        <span className="label-body">I agree all the <a href="#">terms and conditions</a>
                                        </span>
                                    </label>
                                    <button type="submit" name="submit" className="btn btn-dark btn-full btn-medium">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="google-map">
                <div className={mapouter}>
                    <div className={gmap_canvas}>
                        <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <a href="https://getasearch.com/fmovies"></a>
                        <br />
                    </div>
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

            <SmallCardSet />

            <Footer />
        </>
    )
}

export default ContactUs