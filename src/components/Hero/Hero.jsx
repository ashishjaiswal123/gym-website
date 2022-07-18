import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">

        {/* left part */}
        <div className="left-h">
            <Header/>

            {/* the best add */}
            <div className="the-best-add">
              <div></div>
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
            right side
        </div>
    </div>
  )
}

export default Hero