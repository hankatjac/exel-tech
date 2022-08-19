import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/img/logos/exel-tech.jpg'
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        {/* <a className="navbar-brand js-scroll-trigger" href="#page-top">Exel-Tech</a> */}
        <img src={logo} alt="" />
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link js-scroll-trigger">{t('Home')}</Link>
            </li>
            <li className="nav-item">
              <Link to="products" className="nav-link js-scroll-trigger">{t('Products')}</Link>
            </li>
            <li className="nav-item">
              <Link to="services" className="nav-link js-scroll-trigger">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link js-scroll-trigger">{t('About')}</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link js-scroll-trigger">{t('Contact')}</Link>
            </li>
            <li className="nav-item">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar