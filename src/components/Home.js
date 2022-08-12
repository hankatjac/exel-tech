import React from 'react';
import { Link} from "react-router-dom";


const Home = () => {
  return (
    <>
    <header className="masthead">
    <div className="container">
      <div className="row">
        <div className="col-md-6 intro-text">
          <div className="intro-heading text-uppercase">find the best solution for your it problems</div>
          <div className="intro-lead-in">We are a team of IT professionals dedicated to customer satisfaction</div>
          <Link to="services" className="btn btn-primary btn-xl text-uppercase js-scroll-trigger">Learn More</Link>
        </div>
     
        <div className="col-md-6 intro-text">
          {/* <img src={img} alt="" className="" /> */}
        </div>
      </div>
    </div>
  </header>

 {/* <Footer/> */}
  </>
  )
}

export default Home