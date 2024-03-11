import React from 'react';
import ServicesContainer from './ServicesContainer';
import "../Home/Home.css"
import "./Services.css"

const Services = () => {
  return (
    <div id="service-page">
      <section className='page-headers'>
        <h1 className='page-title'>Services</h1>
        <hr className='page-title-line'/>
      </section>
      <section id="service-btn-container">
        <button>All</button>
      </section>
      <ServicesContainer />
    </div>
  )
}

export default Services