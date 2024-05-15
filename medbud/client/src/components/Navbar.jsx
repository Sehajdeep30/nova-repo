import React from 'react'
import { Link }  from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MedBird</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Personal info</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Medicine stock data</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/virtual">Virtual connect</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resource">Resources</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/loginsignup">Login/Signup</Link>
        </li>
       
      </ul>
      <Link className="btn btn-outline-success" to="/adminloginsignup">Doctor Log-in</Link>
    </div>
  </div>
</nav>
  )
}

export default Navbar