import React from 'react'
import GalleryPhoto from '../../components/gallery-photo/GalleryPhoto'
import Footer from '../../components/footer/Footer'
import "./Gallery.css"

const Gallery = () => {
  return (
    <div id="gallery-page">
      <div className="page-header">
        <h1 id="gallery-header" className='page-title'>Gallery</h1>
        <hr className='header-line'/>
      </div>
      <div id="photo-container">
        <GalleryPhoto/>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallery