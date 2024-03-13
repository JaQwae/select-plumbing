import React from 'react'
import externalData from '../../data/externalData.json'
import './BlogContainer.css'

const BlogContainer = () => {
    console.log(externalData.blog)

    return (
        <>
            {externalData.blog.map((item) => (
                <div key={item.id} className="card">
                    <img src={item.img} className="card-img-top" alt={item.alt} />
                    <div className="card-body">
                        <div className='blog-info-header'>
                            <p className='blog-author'>By {item.author}</p>
                            <p>-</p>
                            <p className='blog-date'>{item.date}</p>
                        </div>
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.summary}</p>
                        <a 
                            href={item.link}
                            target= '_blank'
                            rel= 'noopener noreferrer'
                            className="blog-link"
                        >
                            Read More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogContainer