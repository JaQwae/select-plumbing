import React from 'react'
import { PropTypes } from "prop-types";

const ServicesContainer = (props) => {

    const page = props.page;

    return (
        <>
        {props.data.map((item) => (
            <section key={item.id} className='single-home-service-container'>
                <img className='home-service-image' src={item.icon} alt={item.alt} />
                <hr className='home-service-break'/>
                <h2 className="home-service-title">{item.title}</h2>
                <div className='home-services-preview'>
                    {page === "home" &&
                        <>
                            <p>{item.serviceOne}</p>
                            <p>{item.serviceTwo}</p>
                            <p>{item.serviceThree}</p>
                        </>
                    }
                    { page === "service" &&
                        <p>{item.desc}</p>
                    }
                </div>
            </section>
        ))}
        </>
    )
}

ServicesContainer.propTypes = {
    data: PropTypes.array.isRequired,
    page: PropTypes.string.isRequired
}

export default ServicesContainer;