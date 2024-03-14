import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css";
import Hamburger from './Hamburger';


const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    // console.log(hamburgerOpen)
  }
  return (
    <nav className="navbar">
      <ul className='nav'>
      <div id="mobile-nav">
        <Link to="/">
          <img
            src="https://www.accentonprint.com/news/wp-content/uploads/2017/01/nike-logo-copy.jpg"
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
                <hr className="dropdown-divider" />
                <Link to="/news" className="nav-links ">
                  <li className="nav-elements dropdown-item">News</li>
                </Link>
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
            <li className='nav-elements'>(555)-555-5555</li>
            <button id="nav-request-service-btn" className='btn secondary-btn nav-elements'>Request Service</button>
          </div>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar