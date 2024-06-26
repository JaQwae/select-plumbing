import React from 'react'
import BlogContainer from '../../components/blog-container/BlogContainer'
import Footer from "../../components/footer/Footer"
import "./Blog.css"

const Blog = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });

  return (
    <div id="blog-page" className='pages'>
      <div className="page-header">
        <h1 id="blog-header" className="page-title">Blogs</h1>
        {/* <hr className='header-line' /> */}
      </div>
      <div id="blog-container">
        <BlogContainer/>
      </div>
      <Footer/>
    </div>
  )

}

export default Blog