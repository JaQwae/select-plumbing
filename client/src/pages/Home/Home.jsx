import React from 'react';
import { Link } from 'react-router-dom'
import ServicesContainer from '../../components/service-container/ServiceContainer';
import Review from '../../components/review/Review';
import homeData from '../../data/homeData.json';
import Footer from '../../components/footer/Footer';
import "./Home.css";

const Home = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });

  return (
    <div className='page'>
      <section id='hero-container' className='homepage-containers'>
        <article id="slogan-container">
          <p>Trusted By Houston</p>
          <p>Families For Over</p>
          <p>40 Years</p>
        </article>
        <a
          href="https://form.jotform.com/240635777814162"
          target= '_blank'
          rel= 'noopener noreferrer'
        >
          <button
            id="hero-btn"
            className='btn request-service-btn'
          >
            Request Service
          </button>
        </a>
      </section>
      <section id='home-services-container'className='homepage-containers'>
        <div id='home-service-preview'>
          <ServicesContainer data={homeData.serviceOverview} page="home"/>
        </div>
        <Link to="/services" className="nav-links">
          <button id="home-request-service" className='btn-over-white btn'>View All Services</button>
        </Link>
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
      <Footer/>
    </div>
  )
}

export default Home