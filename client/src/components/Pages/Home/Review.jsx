import React from 'react'
import { PropTypes } from "prop-types";
import homeData from './homeData.json'

const Review = (props) => {
    // console.log(homeData.customerReviews[2].review)
    const reviewData = homeData.customerReviews[props.index]
    console.log(reviewData)
    // console.log(props.index)

    return (
        <>
            <div className='review-header'>
                <img
                    className='google-logo'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbapxZNav2xEYhmSHJrJFBqxCPtTMWYh-Y5g&usqp=CAU"
                    alt="google logo"
                />
                <img
                    className='google-stars'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuMFuulTpStB_nkExzl3lDrghpyaSc8zirA&usqp=CAU"
                    alt="five star"
                />
            </div>
            <div className='review-body'>
                <p
                    className='customer-review'
                >
                    {reviewData.review}
                </p>
                <p className='customer-name'>
                    {reviewData.name}
                </p>
            </div>
        </>
    )
}

Review.propTypes = {
    index: PropTypes.number.isRequired
}

export default Review