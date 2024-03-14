import React from 'react'
import "./PromotionsContainer.css"
import promotionData from '../../data/promotionData.json'

const PromotionsContainer = () => {
  return (
    <>
        {promotionData.promotions.map((item) => (
            <section key={item.id} className="single-promotion-container">
                <div className="promotion-content">
                    <h3 className="promotion-title">{item.title}</h3>
                    <p className="promotion-discount">{item.discount}</p>
                    <p className="promotion-summary">{item.summary}</p>
                    <button className="secondary-btn btn">Request Service</button>
                </div>
            </section>
        ))}
    </>
  )
}

export default PromotionsContainer