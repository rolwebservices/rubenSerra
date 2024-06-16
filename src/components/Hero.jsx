import React from 'react'
import ImageGallery from 'react-image-gallery'
import ban3 from '/ban3.jpeg'
import "react-image-gallery/styles/css/image-gallery.css";
import './Hero.css'

const Hero = () => {
  return (
    <div className='destacados'>
        {/* <h1 className='body__titulos'>Productos destacados</h1> */}
        <ImageGallery 
        items={[
            {original: ban3},
            {original: ban3},
            {original: ban3}
        ]}
        
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showNav={false}
        showBullets={true}
        autoPlay={true}
        interval={5000}
        />
    </div>
  )
}

export default Hero