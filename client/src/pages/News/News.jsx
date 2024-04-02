import React from 'react'
import NewsContainer from '../../components/news-contianer/NewsContainer'


const News = () => {
  return (
    <div id="news-page" className='pages'>
      <div className="page-header">
        <h1 id="news-header">News</h1>
        <hr className='header-line' />
      </div>
      <div id="news-container">
        <NewsContainer/>
      </div>
    </div>
  )
}

export default News