import React from 'react';
import { Link} from "react-router-dom";
import img from '../assets/img/logos/exel-tech.jpg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          {/* <a className="navbar-brand js-scroll-trigger" href="#page-top">Exel-Tech</a> */}
          <img src={img} alt="" />
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
         
                <Link to="/" className="nav-link js-scroll-trigger">Home</Link>

              </li>
              <li className="nav-item">
                {/* <a className="nav-link js-scroll-trigger" href="#products">Products</a> */}
                <Link to="products" className="nav-link js-scroll-trigger">Products</Link>

              </li>
              <li className="nav-item">
                {/* <a className="nav-link js-scroll-trigger" href="#services">Services</a> */}
                <Link to="services" className="nav-link js-scroll-trigger">Services</Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li> */}
              <li className="nav-item">
                {/* <a className="nav-link js-scroll-trigger" href="#team">About</a> */}
                <Link to="about" className="nav-link js-scroll-trigger">About</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link js-scroll-trigger" href="#contact">Contact</a> */}
                <Link to="contact" className="nav-link js-scroll-trigger">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar