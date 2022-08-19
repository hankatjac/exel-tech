import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4" style={{ lineHeight: 5 }}>
            <h2>EXEL-TECH</h2>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-google"></i>
                </a>
              </li>
            </ul>
            <span className="copyright">{t('Copyright')}&copy;<span style={{ color: 'white' }}>H.R&amp;</span>Exel-Tech {new Date().getFullYear()}</span>

          </div>
          <div className="col-md-4">
            <div >
              <h2 key="location">{t('LOCATION')}</h2>
              <ul className='list-inline'>
                <li>Phone: (1) 514-335-1300</li>
                <li>Fax: (1) 514-333-1084</li>
                <li><a href="mailto:info@exel-tech.com">Email: info@exel-tech.com</a></li>
                <li><a href="https://goo.gl/maps/PTd5PmZoU5rKqg6u7">Address: 4455 Boulevard Poirier, Saint-Laurent
                  QC H4R-2A4 Canada</a></li>
                <li>{t('Monday to Friday')} 09:00 AM - 05:00 PM</li>
              </ul>
            </div>

          </div>
          <div className="col-md-4">
            <h2>{t('OTHERS')}</h2>
            <ul className="list-inline quicklinks">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/products">{t('Products')}</Link>
              </li>
              <li>
                <Link to="/about">{t('About')}</Link>
              </li>
              <li>
                <Link to="/contact">{t('Contact')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer