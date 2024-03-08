import React from 'react'
import homeData from './homeData.json'

const HomeServiceContainer = () => {
    return (
        <>
        {homeData.serviceOverview.map((item) => (
            <section key={item.id} className='single-home-service-container'>
                <img className='home-service-image' src={item.icon} alt={item.alt} />
                <hr className='home-service-break'/>
                <h2 className="home-service-title">{item.title}</h2>
                <div className='home-services-preview'>
                    <p>{item.serviceOne}</p>
                    <p>{item.serviceTwo}</p>
                    <p>{item.serviceThree}</p>
                </div>
            </section>
        ))}
        </>
    )
}

export default HomeServiceContainer