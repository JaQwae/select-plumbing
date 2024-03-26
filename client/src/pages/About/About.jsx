import React from 'react'
import CoreValues from '../../components/core-values/CoreValues'
import selectPlumbingGroupPhoto from "../../assets/images/about-images/select-plumbing-group-photo.png"
import ourCoreValuesBanner from "../../assets/images/about-images/our-core-value-banner.png"
import "./About.css"

const About = () => {
  return (
    <div id="about-page">
      <h1 id="about-page-title" className='page-title'>Welcome To Select Plumbing Let Us Serve Your Family</h1>
      <section id="intro-section" className='about-page-sections'>
        <div id="intro-content-container">
          <p>Since 1992, the family Owned and operated team at Select Plumbing has been serving the City of Houston and its surrounding areas with trustworthy & reliable plumbing & leak investigation services. Our mission is to ensure that Texas families & businesses have adequate water, gas & sewage systems for all their needs. We work hard to ensure you are more than just a customer… Join The Select Family and schedule service today.</p>
          <a
            href="https://form.jotform.com/240635777814162"
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='btn'>Request Service</button>
          </a>
        </div>
        <img
          id="staff-photo"
          className='about-page-photos'
          src={selectPlumbingGroupPhoto}
          alt="The full staff of select plumbing"
        />
      </section>
      <section id="core-values-section" className='about-page-sections'>
        <img
          id='core-values-image'
          className='about-page-photos'
          src={ourCoreValuesBanner}
          alt="blocks stack together with the words are core values on them"
        />
        <div id="core-values-container">
          <CoreValues />
        </div>
      </section>
      <section id="about-map-container" className='about-page-sections'>
        <div id="service-area-container">
          <div id="service-area-header">
            <h4>Service Area</h4>
            <hr />
          </div>
          <div id="service-areas">
            <p>Greater Houston Area</p>
            <p>Sienna Plantation</p>
            <p>Missouri City</p>
            <p>Sugar Land</p>
            <p>Heights</p>
          </div>
          <a
            href="https://form.jotform.com/240635777814162"
            target='_blank'
            rel='noopener noreferrer'
            className="blog-link read-more-links"
          >
            <button className='btn'>Request Service</button>
          </a>
        </div>
        <div id="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d186668.20637304374!2d-95.73604059500141!3d29.616783654145564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sus!4v1710288767658!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default About