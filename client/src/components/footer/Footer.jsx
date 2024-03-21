import React from 'react'
import logo from "../../assets/images/logo.png"
import accBusRating from "../../assets/images/footer-images/accBusRating.png"
import harLogo from "../../assets/images/footer-images/harLogo.png"
import fpaLogo from "../../assets/images/footer-images/fpaLogo.png"
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className="left-section">
                <img className='footer-logo' src={logo} alt="company logo"/>
                <div className="social-media-container">
                    <i className="fa-brands fa-facebook-f social-media-icons footer-links"></i>
                    <i className="fa-brands fa-instagram social-media-icons footer-links"></i>
                    <i className="fa-brands fa-x-twitter social-media-icons footer-links"></i>
                </div>
                <p>MPL 19051</p>
            </section>
            <section className="middle-section">
                <img src={accBusRating} alt="A+ BBB accredited business" className="accredited-business-rating footer-images"/>
                <img src={harLogo} alt="har.com" className="har-com footer-images" />
                <img src={fpaLogo} alt="Foundation Performance Association" className="fpa-logo footer-images" />
            </section>
            <section className="right-section">
                <div className="footer-contact-header">
                    <h3>Contact Us</h3>
                    <hr/>
                </div>
                <div className="address-container">
                    <i className="fa-solid fa-location-dot footer-icons"></i>
                    <div className="address">
                        <p>P.O Box 564, Sugarland, TX</p>
                        <p>77487-0565</p>
                    </div>
                </div>
                <div className="phone-number-container">
                    <i className="fa-solid fa-phone footer-icons"></i>
                    <p className='footer-links'>(555)555-5555</p>
                </div>
                <div className='email-container'>
                    <i className="fa-solid fa-envelope footer-icons"></i>
                    <p className='footer-links'>info@theselectplumbing.com</p>
                </div>
            </section>
        </div>
    )
}

export default Footer