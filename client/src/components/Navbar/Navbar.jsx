import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className='nav'>
        <Link to="/">
          <img
            src="https://www.accentonprint.com/news/wp-content/uploads/2017/01/nike-logo-copy.jpg"
            alt="Company-Logo"
            id="company-logo"
          />
        </Link>
        <div id='navbar-content'>
          <div id="nav-links-section" className='navbar-content-section'>
            <Link to="/services" className="nav-links">
              <li className="nav-elements">Services</li>
            </Link>
            <li className=" dropdown nav-links nav-elements">
              <li className="dropdown-toggle nav-elements" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </li>
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
            <button id="nav-request-service-btn" className='nav-elements'>Request Service</button>
          </div>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar