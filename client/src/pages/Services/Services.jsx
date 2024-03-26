import React, {useState} from 'react';
import ServicesContainer from '../../components/service-container/ServiceContainer';
import serviceData from "../../data/serviceData.json"
import "../Home/Home.css"
import "./Services.css"

const Services = () => {
  const [category, setCategory] = useState("All");

  const handleClick = (cat) => {
    setCategory(cat)
  }

  return (
    <div id="service-page">
      <section className='page-header'>
        <h1 className='page-title'>Services</h1>
        {/* <hr className='header-line'/> */}
      </section>
      <section id="service-btn-container">
        <button className="service-btn btn" onClick={() => handleClick("All")}>All</button>
        <button className="service-btn btn" onClick={() => handleClick("Inspection")}>Inspection</button>
        <button className="service-btn btn" onClick={() => handleClick("Plumbing")}>Plumbing</button>
        <button className="service-btn btn" onClick={() => handleClick("Sewage")}>Sewer</button>
        <button className="service-btn btn" onClick={() => handleClick("Realtor")}>Realtors</button>
      </section>
      <section id="services-container">
        <ServicesContainer data={serviceData.services} page="service" category={category}/>
      </section>
    </div>
  )
}

export default Services