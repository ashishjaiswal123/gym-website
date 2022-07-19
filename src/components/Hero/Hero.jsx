import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'

const Hero = () => {
  const transition = {type : "spring", duration: '3'}
  return (
    <div className="hero">
      <div className="blur blur-h"></div>

      {/* left part */}
      <div className="left-h">
          <Header/>

          {/* the best add */}
          <div className="the-best-add">
            <motion.div
            initial={{left: '238px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type:'tween'}}
            ></motion.div>
            <span>the best fitness club in the town</span>
          </div>

          {/* Hero Heading */}
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
          </div>

          {/* figures */}
          <div className="figures">
            <div>
              <span>+ 140</span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span>+ 978</span>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <span>+ 50</span>
              <span>FITNESS PROGRAMS</span>
            </div>
          </div>

          {/* hero button */}
          <div className="hero-buttons">
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
          </div>
      </div>

      {/* right part */}
      <div className="right-h">
          <button className='btn'>Join Now</button>
          <motion.div className="heart-rate"
          initial={{right: "-1rem"}}
          whileInView={{right: "4rem"}}
          transition={transition}>
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>

          {/* hero images */}
          <img src={hero_image} alt=""  className='hero-image'/>
          <motion.img 
          initial={{right: '11rem'}}
          whileInView={{right: '20rem'}}
          transition={transition}
          src={hero_image_back} alt=""  className='hero-image-back'/>

          {/* calories */}
          <motion.div className="calories"
          initial={{right: '37rem'}}
          whileInView={{right: '28rem'}}
          transition={transition}
          >
            <img src={Calories} alt="" />
            <div> <span>Calories Burned</span><span>220 kcal</span></div>
          </motion.div>
          
      </div>
    </div>
  )
}

export default Hero