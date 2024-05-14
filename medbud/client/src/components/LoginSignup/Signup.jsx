import React from 'react'
import './Signup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const Signup = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Sign-up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>


        <div className="submit-container">

          <button className="submit" type="submit">Sign-up</button>
        </div>

        <span className="sign-up">Already have an account.  <a href='http://localhost:3000/loginsignup'>Log-in</a></span>

      </div>
    </div>
  )
}

export default Signup
