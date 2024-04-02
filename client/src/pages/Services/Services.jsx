import React, {useState} from 'react';
import ServicesContainer from '../../components/service-container/ServiceContainer';
import serviceData from "../../data/serviceData.json"
import Footer from "../../components/footer/Footer"
import "../Home/Home.css"
import "./Services.css"

const Services = () => {
  const [category, setCategory] = useState("All");
  const [activeButton, setActiveButton] = useState("All");

  const handleClick = (cat) => {
    setCategory(cat);
    setActiveButton(cat === activeButton ? null : cat);
  }

  return (
    <div id="service-page" className='pages'>
      <section className='page-header'>
        <h1 className='page-title'>Services</h1>
        {/* <hr className='header-line'/> */}
      </section>
      <section id="service-btn-container">
        <button className={`service-btn btn-over-white btn ${activeButton === 'All' ? 'service-btn-selected' : ''}`} onClick={() => handleClick("All")}>All</button>
        <button className={`service-btn btn-over-white btn ${activeButton === 'Inspection' ? 'service-btn-selected' : ''}`} onClick={() => handleClick("Inspection")}>Inspection</button>
        <button className={`service-btn btn-over-white btn ${activeButton === 'Plumbing' ? 'service-btn-selected' : ''}`} onClick={() => handleClick("Plumbing")}>Plumbing</button>
        <button className={`service-btn btn-over-white btn ${activeButton === 'Sewage' ? 'service-btn-selected' : ''}`} onClick={() => handleClick("Sewage")}>Sewer</button>
        <button className={`service-btn btn-over-white btn ${activeButton === 'Realtor' ? 'service-btn-selected' : ''}`} onClick={() => handleClick("Realtor")}>Realtors</button>
      </section>
      <section id="services-container">
        <ServicesContainer data={serviceData.services} page="service" category={category}/>
      </section>
      <Footer/>
    </div>
  )
}

export default Services