import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../Assets/shoplogo.png'
import cart from '../Assets/cart1.jpg'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const[menu,setmenu]=useState("shop")

  return (
    <div className='nav'>

        <div className='nav-logo'>
            <img src={logo} alt='' className='logo'/>
            <span className='nav-text'>SHOPPER</span>
        </div>

        <ul className='nav-menu'>
            <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none', color:'white'}} to='/'>Shop</Link></li>
            <li onClick={()=>{setmenu("men")}}><Link  style={{textDecoration:'none', color:'white'}} to="/mens">Men</Link></li>
            <li onClick={()=>{setmenu("women")}}><Link style={{textDecoration:'none', color:'white'}} to="/women">Women</Link></li>
            <li onClick={()=>{setmenu("kids")}}><Link  style={{textDecoration:'none', color:'white'}} to="/kids">Kids</Link></li>
        </ul>

        <div className='nav-login-cart'>
            <Link to="/login"><button>Login</button> </Link>
            <Link to="/cart"><img src={cart} alt='Cart Logo' className='cart-logo' /></Link>
        </div>

    </div>
  )
}
