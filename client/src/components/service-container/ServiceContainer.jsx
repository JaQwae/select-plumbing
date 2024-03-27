import React from 'react'
import { PropTypes } from "prop-types";
import './ServiceContainer.css'

const ServicesContainer = (props) => {

    const page = props.page;
    let filteredData = props;
    
    if (props.category === "All") {
        filteredData = props.data
    } else {
        filteredData = props.data.filter(item => item.category === props.category);
    }

    return (
        <>
        {filteredData.map((item) => (
            <section key={item.id} className='service-container'>
                <div className="service-container-header">
                    <i className={`service-icon ${item.icon}`}></i>
                    <hr className='service-break'/>
                </div>
                <div className="service-container-content">
                <h2 className="service-title">{item.title}</h2>
                <div className='services-preview homepage-service-preview'>
                    {page === "home" &&
                        <>
                            <p>{item.serviceOne}</p>
                            <p>{item.serviceTwo}</p>
                            <p>{item.serviceThree}</p>
                        </>
                    }
                    { page === "service" &&
                        <>
                            <p className='service-description'>{item.desc}</p>
                            {item.link !== "none" &&
                                <a 
                                    className='service-link'
                                    href={item.link}
                                    target= '_blank'
                                    rel= 'noopener noreferrer'
                                >
                                    Read More
                                </a>
                            }
                        </>
                    }
                </div>
                </div>
            </section>
        ))}
        </>
    )
}

ServicesContainer.propTypes = {
    data: PropTypes.array.isRequired,
    page: PropTypes.string.isRequired,
    category: PropTypes.string
}

export default ServicesContainer;