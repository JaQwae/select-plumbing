import React from 'react'
import {galleryData} from '../../data/galleryData.js'
import "./GalleryPhoto.css"

const GalleryPhoto = () => {
    return (
    <>
            {galleryData.galleryPhotos.map((item) => (
                <div key={item.id} className='single-photo-container'>
                    {/* <div> */}
                        <img
                            className='photo'
                            src={item.img}
                            alt={item.alt}
                        />
                    {/* </div> */}
                    
                </div>
            ))}
        </>
    )
}

export default GalleryPhoto