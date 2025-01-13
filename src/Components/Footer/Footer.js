import React from 'react'
import './Footer.css'
import logo from '../Assets/shoplogo.png'
import logo1 from '../Assets/insta1.png'
import logo2 from '../Assets/twitter.png'
import logo3 from '../Assets/whatsapp1.png'

export const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer-logo'>
            <img src={logo} alt=''/>
            <p>SHOPPER</p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={logo1} alt='' />
            </div>

            <div className='footer-icons-container'>
                <img src={logo2} alt='' />
            </div>

            
            <div className='footer-icons-container'>
                <img src={logo3} alt='' />
            </div>

        </div>

    </div>
  )
}
