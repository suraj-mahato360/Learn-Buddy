import React from 'react'
import Image from "next/image";
import heroImg from '../../assets/hero_img.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className='hero-text'>
            <h2>I am currently understanding DSA</h2>
            <h3>Join me in this journey</h3>
        </div>
        <div className='hero-animation'>
            <Image className="heroImg" src={heroImg} alt='Journey Image'/>
        </div>
    </div>
  )
}

export default Hero