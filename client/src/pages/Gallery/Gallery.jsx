import React from 'react'
import "./Gallery.css"
import GalleryPhoto from '../../components/gallery-photo/GalleryPhoto'

const Gallery = () => {
  return (
    <div id="gallery-page">
      <div className="page-header">
        <h1 id="gallery-header">Gallery</h1>
        <hr className='header-line'/>
      </div>
      <div id="photo-container">
        <GalleryPhoto/>
      </div>
    </div>
  )
}

export default Gallery