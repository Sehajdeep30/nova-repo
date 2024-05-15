import React ,{useState}from 'react'
import {useNavigate} from 'react-router'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
  const [credentials,setCredentials]=useState({useremail:"",password:''});

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({useremail:credentials.useremail,password:credentials.password})
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        //Save the auth token and redirect
        localStorage.setItem('token',json.authtoken);
        // props.showAlert("Logged in Successfully","success")
        
    }
    else{
        // props.showAlert("Invalid Details","danger")
        console.log("Invalid")
    }
}
const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value})
}

  return (
    <div className="container">
      <div className="header">
        <div className="text">Log-in</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Address" onChange={onChange}/>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" onChange={onChange} value={credentials.password}/>
          </div>
        </div>

        <div className="forgot-password">Lost Password? <span>click here!</span></div>

        <div className="submit-container">

          <button className="submit" type="submit">Log in</button>
        </div>
      </form>

      <span className="sign-up">Don't have an account?  <a href='http://localhost:3000/signup'>sign-up</a></span>

    </div>

  )
}

export default LoginSignup
