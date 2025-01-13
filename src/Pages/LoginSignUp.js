import React from 'react'
import '../Pages/Css/LoginSignUp.css'

export const LoginSignUp = () => {
  return (
    <div className='loginsignup'>

      <div className='loginsignup-container'>
          <h1>Sign Up</h1>
          <div className='loginsignup-fields'>
            <input type='text' placeholder='Enter Name' />
            <input type='email' placeholder='Enter email' />
            <input type='password' placeholder='Enter Password' />
          </div>

          <button>Continue</button>
          <p className='loginsignup-login'>Already Have Account?<span>Login Here</span></p>
          <div className='loginsignup-agree'>
            <input type='checkbox' name='' id='' />
            <p>By Continuing , i agree to terms and conditions</p>
          </div>

      </div>

    </div>
  )
}
