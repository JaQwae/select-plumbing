import React from 'react';
import HomeServiceContainer from './HomeServiceContainer';
import Review from './Review';
import "./Home.css";

const Home = () => {
  return (
    <>
      <section id='hero-container' className='homepage-containers'>
        <article id="slogan-container">
          <p>Trusted By Houston</p>
          <p>Families For Over</p>
          <p>40 Years</p>
        </article>
        <button
          id="hero-btn"
          className='btn request-service-btn'
        >
          Request Service
        </button>
      </section>
      <section id='services-container'className='homepage-containers'>
        <div id='service-preview'>
          <HomeServiceContainer/>
        </div>
        <button id="home-request-service" className='btn'>View All Services</button>
      </section>
      <section id="review-container" className='homepage-containers'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
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
                  gljkdljg dlg dfgldkgj addj djg;dljgadkj gdj gdafklgdfjadfgjdfa lgj dfjgdfj gdfjkgdf jgldfgj dflk
                </p>
                <p className='customer-name'>-Joey Doey</p>
              </div>
            </div>
            <div className="carousel-item">
              <h2>Hello</h2>
            </div>
            <div className="carousel-item">
              <Review />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Home