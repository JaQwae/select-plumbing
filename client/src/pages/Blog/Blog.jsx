import React from 'react'
import BlogContainer from '../../components/blog-container/BlogContainer'
import "./Blog.css"

const Blog = () => {
  return (
    <div id="blog-page">
      <div className="page-header">
        <h1 id="blog-header">Blog</h1>
        <hr className='header-line' />
      </div>
      <div id="blog-container">
        <BlogContainer/>
      </div>
    </div>
  )

}

export default Blog