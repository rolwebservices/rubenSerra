import React from 'react'
import Slider from './Slider'
import ban1 from '/ban1.jpeg'
import ban2 from '/ban2.jpeg'
import ban3 from '/ban3.jpeg'


const Hero = () => {

  const images = [
    {src: ban1, link: '#', alt: 'Promo x'},
    {src: ban2, link: '#', alt: 'Promo y'},
    {src: ban3, link: '#', alt: 'Promo z'}
  ]

  return (
    <>
      <Slider images={images} velocity={15}/>
    </>

  )
}

export default Hero