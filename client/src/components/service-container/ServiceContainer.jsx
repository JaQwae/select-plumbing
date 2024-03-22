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
                <img className='service-image' src={item.icon} alt={item.alt} />
                <hr className='service-break'/>
                <h2 className="service-title">{item.title}</h2>
                <div className='services-preview'>
                    {page === "home" &&
                        <>
                            <p>{item.serviceOne}</p>
                            <p>{item.serviceTwo}</p>
                            <p>{item.serviceThree}</p>
                        </>
                    }
                    { page === "service" &&
                        <>
                            <p>{item.desc}</p>
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