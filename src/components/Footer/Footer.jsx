import React from 'react';
import './Footer.css';

const Footer = () => {
return (

    <div className="footer_container">
                <div className="copyright">
                    <div className="no-float">
                        <a href="#0" className="logo navbar-brand">Brides <span>dating</span></a>
                        <span className="copyr">Copyright. Brides.Dating 2020</span>
                    </div>
                    <div className="soc-btn">
                        <a className="btn-group btn sc-youtube" role="group" aria-label="...">
                            <i className="fa fa-youtube"></i></a>
                        <a className="btn-group btn sc-facebook" role="group" aria-label="...">
                            <i className="fa fa-facebook"></i></a>
                        <a className="btn-group btn sc-twiter" role="group" aria-label="...">
                            <i className="fa fa-twitter"></i></a>
                        <a className="btn-group btn sc-vimeo" role="group" aria-label="...">
                            <i className="fa fa-vimeo"></i></a>
                    </div>
                </div>
                <div className="about">
                    <ul className="footer-title-gr">
                        <li>
                            <h3>About</h3>
                        </li>
                        <li><a href="#0">Video Chat gallery</a></li>
                        <li><a href="#0">Gallery of Ladies</a></li>
                        <li><a href="#0">New Ladies</a></li>
                        <li><a href="#0">Video Gallery</a></li>
                        <li><a href="#0">Romantic dictionary</a></li>
                        <li><a href="#0">What does she want?</a></li>
                        <li><a href="#0">Ladies dreams about love</a></li>
                        <li><a href="#0">How we take ladies photos</a></li>
                        <li><a href="#0">Parade of brides</a></li>
                        <li><a href="#0">Age Gap: should it matter?</a></li>
                    </ul>
                </div>
                <div className="agency">
                    <ul className="footer-title-gr agency">
                        <li>
                            <h3>Agency</h3>
                        </li>
                        <li className="agancy-mission"><a href="#0">Our mission</a></li>
                        <li className="agancy-scam"><a href="#0">Against scams</a></li>
                        <li className="agancy-news"><a href="#0">News</a></li>
                        <li className="agancy-test"><a href="#0">Testimonials</a></li>
                        <li className="agancy-girl"><a href="#0">Для девушек</a></li>
                    </ul>
                </div>
                <div className="services">
                    <ul className="footer-title-gr agency service">
                        <li>
                            <h3>Services</h3>
                        </li>
                        <li className="servise-our"><a href="#0">Our services in brief</a></li>
                        <li className="service-com"><a href="#0">Communication services</a></li>
                        <li className="service-gift"><a href="#0">Gifts for Lady</a></li>
                        <li className="service-special"><a href="#0">Special Invoice</a></li>
                        <li className="service-week"><a href="#0">Weekly special</a></li>
                        <li className="service-trip"><a href="#0">Trip prices</a></li>
                    </ul>
                </div>
            </div>
)
}

export default Footer;