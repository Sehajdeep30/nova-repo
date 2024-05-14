import React from 'react'
import './AdminLoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const AdminLoginSignup = () => {
  return (
      <div className="container">
            <div className="admin">Administrator section</div>
        <div className="header">
        <div className="text">Log-in</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Address" />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password"/>
        </div>
        </div>

         <div className="forgot-password">Lost Password? <span>click here!</span></div>
      
        <div className="submit-container">
            
            <button className="submit" type="submit">Log in</button>
        </div>
  
  <span className="sign-up">Don't have an account?  <a href='#'>sign-up</a></span>

    </div>
  )
}

export default AdminLoginSignup
