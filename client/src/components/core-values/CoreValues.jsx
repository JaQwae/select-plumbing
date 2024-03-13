import React from 'react'
import aboutData from "../../data/aboutData.json"
import "./CoreValues.css"

const CoreValues = () => {
    return (
        <>
            {aboutData.values.map((item) => (
                <div key={item.id} className='single-core-values-container'>
                    <img
                        className='core-values-img'
                        src={item.img}
                        alt={item.alt}
                    />
                    <h5>{item.value}</h5> 
                </div>
            ))}
        </>
    )
}

export default CoreValues