import React from 'react'
import PromotionsContainer from '../../components/promotion-container/PromotionsContainer'
import "./Promotion.css"

const Promotions = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });

  return (
    <div id='promotions-page' className='pages'>
      <div className="page-header">
        <h1 id="promotions-header" className="page-title">Promotions</h1>
        {/* <hr className='header-line' /> */}
      </div>
      <div id="promotions-container">
        <PromotionsContainer/>
      </div>
    </div>
  )
}

export default Promotions