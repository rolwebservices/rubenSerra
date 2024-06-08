import React from 'react'
import ImageGallery from 'react-image-gallery'
import ban1 from '/ban.jpeg'
import ban2 from '/ban2.jpeg'
import ban3 from '/ban3.jpeg'
import "react-image-gallery/styles/css/image-gallery.css";
import './Hero.css'

const Hero = () => {
  return (
    <div className='destacados'>
        <h1 className='destacados__titulo'>Productos destacados</h1>
        <ImageGallery 
        items={[
            {original: ban1},
            {original: ban2},
            {original: ban3}
        ]}
        
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showNav={false}
        showBullets={true}
        />
    </div>
  )
}

export default Hero