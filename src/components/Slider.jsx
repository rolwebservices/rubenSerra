import './Slider.css'
import { useEffect, useState } from 'react';


function Slider( { images} ) {
    const [slideCount, setSlideCount] = useState(images.length);


    useEffect(() => {
        setSlideCount(images.length);
      }, [images]);

  useEffect(() => {
    document.documentElement.style.setProperty('--slide-count', slideCount);
    document.documentElement.style.setProperty(
      '--slide-track-width',
      `calc(100vw * ${slideCount})`
    );
  }, [slideCount]);

  return (
    <div className='slider'>
        <div className='slide-track'>
            {images.map((image, index) => (
                <div className='slide' key={index}>
                    <a href={image.link}>
                        <img src={image.src} alt={image.alt} />
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Slider