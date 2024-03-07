import React from 'react'
import homeData from './homeData.json'

const HomeServiceContainer = () => {
    return (
        <div id="service-category-container">
        {homeData.serviceOverview.map((item) => (
            <section key={item.id} className='home-service-container'>
                <img className='home-section-image' src={item.icon} alt={item.alt} />
                <hr className='home-section-break'/>
                <h2 className="home-section-title">{item.title}</h2>
                <div className='home-services-preview'>
                    <p>{item.serviceOne}</p>
                    <p>{item.serviceTwo}</p>
                    <p>{item.serviceThree}</p>
                </div>
            </section>
        ))}
        </div>
    )
}

export default HomeServiceContainer