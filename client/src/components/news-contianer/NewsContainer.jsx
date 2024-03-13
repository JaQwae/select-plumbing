import React from 'react'
import externalData from '../../data/externalData.json'
import "./NewsContainer.css"

const NewsContainer = () => {
    return (
        <>
            {externalData.news.map((item) => (
                <section key={item.id} className="single-news-container">
                    <img src={item.img} className="news-image" alt={item.alt} />
                    <div className="new-info-container">
                        <h5 className="news-title">{item.title}</h5>
                        <p className='news-date'>{item.date}</p>
                        <p className="news-text">{item.summary}</p>
                        <a
                            href={item.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className="news-link read-more-links"
                        >
                            Read More <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </section>
            ))}
        </>
    )
}

export default NewsContainer