import React from 'react';
import ServicesContainer from '../../components/service-container/ServiceContainer';
import Review from '../../components/review/Review';
import homeData from '../../data/homeData.json'
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
          <ServicesContainer data={homeData.serviceOverview} page="home"/>
        </div>
        <button id="home-request-service" className='btn'>View All Services</button>
      </section>
      <section id="review-container" className='homepage-containers'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Review data={homeData.customerReviews} index={0}/>
            </div>
            <div className="carousel-item">
              <Review data={homeData.customerReviews} index={1}/>
            </div>
            <div className="carousel-item">
              <Review data={homeData.customerReviews} index={2}/>
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