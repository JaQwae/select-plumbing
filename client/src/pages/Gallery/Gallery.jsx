import React from 'react'
import GalleryPhoto from '../../components/gallery-photo/GalleryPhoto'
import Footer from '../../components/footer/Footer'
import "./Gallery.css"

const Gallery = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });

  return (
    <div id="gallery-page" className='pages'>
      <div className="page-header">
        <h1 id="gallery-header" className='page-title'>Gallery</h1>
        {/* <hr className='header-line'/> */}
      </div>
      <div id="photo-container">
        <GalleryPhoto/>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallery