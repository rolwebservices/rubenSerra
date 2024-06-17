import React from 'react'
import Slider from './Slider'

const Hero = () => {

  const images = [
    {src: '../public/ban1.jpeg', link: '#', alt: 'Promo x'},
    {src: '../public/ban2.jpeg', link: '#', alt: 'Promo y'},
    {src: '../public/ban3.jpeg', link: '#', alt: 'Promo z'}
  ]

  const images2 = [
    {src: '../public/ban1.jpeg', link: '#', alt: 'Promo x'},
    {src: '../public/ban2.jpeg', link: '#', alt: 'Promo y'}
  ]

  return (
    <>
      <Slider images={images} velocity={15}/>
    </>

  )
}

export default Hero