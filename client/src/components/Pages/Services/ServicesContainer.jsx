import React from 'react'
import serviceData from './serviceData.json'

const ServicesContainer = () => {
    return (
        <div id="services-container">
        {serviceData.services.map((item) => (
            <section key={item.id} className='single-home-service-container'>
                <img className='home-service-image' src={item.icon} alt={item.alt} />
                <hr className='home-service-break'/>
                <h2 className="home-service-title">{item.title}</h2>
                <div className='home-services-preview'>
                    <p>{item.desc}</p>
                </div>
            </section>
        ))}
        </div>
    )
}

export default ServicesContainer