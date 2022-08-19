import React from 'react'
import picture from '../assets/img/about/costas.jpg';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">{t('About US')}</h2>
            {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
          </div>
        </div>

        <div className="col-12 text-center">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={picture} alt="" />
            <h4>Mr. Costas Psyharis</h4>
            <h2 className="text-muted">CEO</h2>
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
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-9 mx-auto">
            <p className="large text-muted">{t('About-intro')}</p>
            <h4>{t('How we define personalized services')}</h4>
            <p className='text-muted'>
              {t('About-body')}
            </p>
          </div>
        </div>
      </div>

    </section>



  )
}

export default About