import React from 'react'
import logo from "../../assets/images/logo.png"
import accBusRating from "../../assets/images/footer-images/accBusRating.png"
import harLogo from "../../assets/images/footer-images/harLogo.png"
import fpaLogo from "../../assets/images/footer-images/fpaLogo.png"
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className="left-section footer-section">
                <img className='footer-logo' src={logo} alt="company logo"/>
                <div className="social-media-container">
                    <a 
                        href="https://www.facebook.com/SelectLeakInvestigators/" 
                        target= '_blank'
                        rel= 'noopener noreferrer'
                    >
                        <i className="fa-brands fa-facebook-f social-media-icons footer-links"></i>
                    </a>
                    <a 
                        href="https://www.instagram.com/selectplumbing/?hl=en" 
                        target= '_blank'
                        rel= 'noopener noreferrer'
                    >
                        <i className="fa-brands fa-instagram social-media-icons footer-links"></i>
                    </a>
                    <a 
                        href="https://www.linkedin.com/company/select-plumbing-inc/about/" 
                        target= '_blank'
                        rel= 'noopener noreferrer'
                    >
                        <i className="fa-brands fa-linkedin-in social-media-icons footer-links"></i>
                    </a>
                </div>
                <p>MPL 19051</p>
            </section>
            <section className="middle-section footer-section">
                <img src={harLogo} alt="har.com" className="har-com footer-images" />
                <img src={accBusRating} alt="A+ BBB accredited business" className="accredited-business-rating footer-images"/>
                <img src={fpaLogo} alt="Foundation Performance Association" className="fpa-logo footer-images" />
            </section>
            <section className="right-section footer-section">
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
                    <a className='footer-links' href="tel:281-561-9651">(281) 561-9651</a>
                </div>
                <div className='email-container'>
                    <i className="fa-solid fa-envelope footer-icons"></i>
                    <a className='footer-links' href="mailto:info@theselectplumbing.com">info@theselectplumbing.com</a>
                </div>
            </section>
        </div>
    )
}

export default Footer