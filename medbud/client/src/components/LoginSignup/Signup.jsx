import React,{useState} from 'react'
import { useNavigate } from 'react-router'
import './Signup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const Signup = () => {
  const [credentials,setCredentials]=useState({userName:"",userEmail:"",password:""});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      // props.showAlert("Account Created Successfully","success")
    }
    else{
      // props.showAlert("Invalid Credentials","danger")
      console.log("Invalid Credentials");
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Sign-up</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" onChange={onChange} placeholder="Name" />
            </div>

            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" onChange={onChange} placeholder="Email Address" />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" onChange={onChange} placeholder="Password" />
            </div>
          </div>


          <div className="submit-container">

            <button className="submit" type="submit">Sign-up</button>
          </div>
        </form>

        <span className="sign-up">Already have an account.  <a href='http://localhost:3000/loginsignup'>Log-in</a></span>

      </div>
    </div>
  )
}

export default Signup



