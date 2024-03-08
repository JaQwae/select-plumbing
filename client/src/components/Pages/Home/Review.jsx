import React from 'react'

const Review = () => {
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
                    gljkdljg fdasf sdaf asdf asdf sd fsd fsd fds f sdfsdgdgfdgdfzg gdfgadfgdf dlg dfgldkgj addj djg;dljgadkj gdj gdafklgdfjadfgjdfa lgj dfjgdfj gdfjkgdf jgldfgj dflk
                </p>
                <p className='customer-name'>-Joey Doey</p>
            </div>
        </>
    )
}

export default Review