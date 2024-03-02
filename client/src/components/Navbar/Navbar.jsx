import React from 'react';
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className='nav'>
          <img 
            src="https://www.accentonprint.com/news/wp-content/uploads/2017/01/nike-logo-copy.jpg" 
            alt="Company-Logo" 
            id="company-logo"/>
          <div id='navbar-content'>
            <div id="nav-links-section" className='navbar-content-section'>
              <li className="nav-links nav-elements">About</li>
              <li className="nav-links nav-elements">Services</li>
              <li className="nav-links nav-elements">Gallery</li>
              <li className="nav-links nav-elements">Resources</li>
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