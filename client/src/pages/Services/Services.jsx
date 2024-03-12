import React, {useState} from 'react';
// import ServiceSortBtn from '../../components/service-sort-btn/ServiceSortBtn';
import ServicesContainer from '../../components/service-container/ServiceContainer';
import serviceData from "../../data/serviceData.json"
import "../Home/Home.css"
import "./Services.css"

const Services = () => {
  const [category, setCategory] = useState("All");

  const handleClick = (cat) => {
    setCategory(cat)
    // console.log(category);
  }

  return (
    <div id="service-page">
      <section className='page-headers'>
        <h1 className='page-title'>Services</h1>
        <hr className='page-title-line'/>
      </section>
      <section id="service-btn-container">
        <button onClick={() => handleClick("All")}>All</button>
        <button onClick={() => handleClick("Inspection")}>Inspection</button>
        <button onClick={() => handleClick("Plumbing")}>Plumbing</button>
        <button onClick={() => handleClick("Sewage")}>Sewage</button>
        <button onClick={() => handleClick("Realtor")}>Realtor</button>
      </section>
      <section id="services-container">
        <ServicesContainer data={serviceData.services} page="service" category={category}/>
      </section>
    </div>
  )
}

export default Services