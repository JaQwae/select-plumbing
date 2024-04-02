import React from 'react'
import { PropTypes } from "prop-types";
// import googleReviewLogo from "../../assets/images/home-images/googleReviewLogo.png"
import googleReviewLogoNew from "../../assets/images/home-images/new-google-review-image.png"
import googleStars from "../../assets/images/home-images/googleStars.png"
import "./Review.css"

const Review = (props) => {

    const reviewData = props.data[props.index]
    
    return (
        <>
            <div className='review-header'>
                <img
                    className='google-logo'
                    src={googleReviewLogoNew}
                    alt="google logo"
                />
                <img
                    className='google-stars'
                    src={googleStars}
                    alt="five star"
                />
            </div>
            <div className='review-body'>
                <p
                    className='customer-review'
                >
                    {`"${reviewData.review}"`}
                </p>
                <p className='customer-name'>
                    {`- ${reviewData.name}`}
                </p>
            </div>
        </>
    )
}

Review.propTypes = {
    data: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
}

export default Review