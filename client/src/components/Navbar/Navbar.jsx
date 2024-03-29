import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import logo from "../../assets/images/logo.png";
import "./Navbar.css";


const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <nav className="navbar">
      <ul className='nav'>
      <div id="mobile-nav">
        <Link to="/">
          <img
            src={logo}
            alt="Company-Logo"
            id="company-logo"
          />
        </Link>
        <div className={`hamburger-menu open-${hamburgerOpen}`} onClick={toggleHamburger}>
          <Hamburger/>
        </div>
        </div>
        <div className={`navbar-content open-${hamburgerOpen}`}>
          <div id="nav-links-section" className={`navbar-content-section`}>
            <Link to="/" className="nav-links">
              <li className="nav-elements">Home</li>
            </Link>
            <Link to="/services" className="nav-links">
              <li className="nav-elements">Services</li>
            </Link>
            <li className=" dropdown nav-links nav-elements">
              <a className="dropdown-toggle nav-elements nav-links" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </a>
              <ul className="dropdown-menu">
                <Link to="/blog" className="nav-links ">
                  <li className="nav-elements dropdown-item">Blog</li>
                </Link>
                {/* <hr className="dropdown-divider" />
                <Link to="/news" className="nav-links ">
                  <li className="nav-elements dropdown-item">News</li>
                </Link> */}
                <hr className="dropdown-divider" />
                <Link to="/promotions" className="nav-links ">
                  <li className="nav-elements dropdown-item">Promotions</li>
                </Link>
              </ul>
            </li>
            <Link to="/about" className="nav-links">
              <li className="nav-elements">About</li>
            </Link>
            <Link to="/gallery" className="nav-links">
              <li className="nav-elements">Gallery</li>
            </Link>
          </div>
          <div id="nav-contact-section" className='navbar-content-section'>
            <li id="nav-phone-number" className='nav-elements'><i className="fa-solid fa-phone"></i> (555)-555-5555</li>
            <a
              href="https://form.jotform.com/240635777814162"
              target= '_blank'
              rel= 'noopener noreferrer'
            >
              <button 
                id="nav-request-service-btn" 
                className='btn nav-elements'
              >Request Service</button>
            </a>
          </div>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar