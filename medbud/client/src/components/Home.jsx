import React from 'react'
import  './Home.css'




const Home = () => {
  return (
    <div>
    <div className="section__container header__container">
    <div classNameName="header__content">
      <h1>Providing an Exceptional Patient Experience</h1>
      <p>
        Welcome, where exceptional patient experiences are our priority.
        With compassionate care, state-of-the-art facilities, and a
        patient-centered approach, we're dedicated to your well-being. Trust
        us with your health and experience the difference.
      </p>
    </div>
    </div>
    <hr />
    <section className="section__container service__container">
      <div className="service__header">
        <div className="service__header__content">
          <h2 className="section__header">Our Special service</h2>
          <p>
            Beyond simply providing medical care, our commitment lies in
            delivering unparalleled service tailored to your unique needs.
          </p>
        </div>
      </div>
      <div className="service__grid">
        <div className="service__card">
          <span><i className="ri-microscope-line"></i></span>
          <h4>Laboratory Test</h4>
          <p>
            Accurate Diagnostics, Swift Results: Experience top-notch Laboratory
            Testing at our facility.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="service__card">
          <span><i className="ri-mental-health-line"></i></span>
          <h4>Health Check</h4>
          <p>
            Our thorough assessments and expert evaluations help you stay
            proactive about your health.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="service__card">
          <span><i className="ri-hospital-line"></i></span>
          <h4>General Dentistry</h4>
          <p>
            Experience comprehensive oral care with Dentistry. Trust us to keep
            your smile healthy and bright.
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </section>
    <section className="section__container about__container">
      <div className="about__content">
        <h2 className="section__header">About Us</h2>
        <p>
          Welcome to our healthcare website, your one-stop destination for
          reliable and comprehensive health care information. We are committed
          to promoting wellness and providing valuable resources to empower you
          on your health journey.
        </p>
        <p>
          Explore our extensive collection of expertly written articles and
          guides covering a wide range of health topics. From understanding
          common medical conditions to tips for maintaining a healthy lifestyle,
          our content is designed to educate, inspire, and support you in making
          informed choices for your health.
        </p>
        <p>
          Discover practical health tips and lifestyle advice to optimize your
          physical and mental well-being. We believe that small changes can lead
          to significant improvements in your quality of life, and we're here to
          guide you on your path to a healthier and happier you.
        </p>
      </div>
      <div className="about__image">
        <img src="https://raw.githubusercontent.com/WebDesignMastery/HealthCare_22-07-23/90dd52aa02bce2a3d1391078412a70dfdbd884ae/assets/choose-us.jpg" alt="image" />
      </div>
    </section>
    </div>
  
  )
}

export default Home
