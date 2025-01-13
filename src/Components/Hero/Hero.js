import React from 'react'
import './Hero.css'
import hand from '../Assets/hand1.jpg'
import hero from '../Assets/hero12.jpg'

export const Hero = () => {
  return (
    <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
               <div>
                <div className='hand'>
                    <p>New</p>
                    <img src={hand} alt='hand'/>
                </div>

                <p>Collections</p>
                <p>For everyone</p>

            </div>

            <div className='latestbtn'>
                <button>Latest Collections</button>
            </div>

            </div>

            <div className='hero-right'>
                <img src={hero} alt='myimage' className='myimage'></img>
            </div>
    </div>
  )
}
