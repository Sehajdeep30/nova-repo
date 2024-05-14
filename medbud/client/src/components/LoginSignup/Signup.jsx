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


// import React, { useState } from 'react'
// import { useNavigate } from 'react-router';

// export default function Signup(props) {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
//   const history = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = credentials;
//     const response = await fetch("http://localhost:5000/api/auth/createuser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, password })
//     });
//     const json = await response.json();
//     console.log(json);
//     if (json.success) {
//       //Save the auth token and redirect
//       localStorage.setItem('token', json.authtoken);
//       history('/')
//       props.showAlert("Account Created Successfully","success")
//     }
//     else{
//       props.showAlert("Invalid Credentials","danger")
//     }
//   }
//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }
//   return (
//     <div className='container mt-2'>
//       <h2 className='my-2'>Create an account to use iNotebook</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" />
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//           <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   )
// }
