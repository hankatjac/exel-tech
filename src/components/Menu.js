import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/img/logos/exel-tech.jpg'
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "react-i18next";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = ({ user, logOut }) => {
  const { t } = useTranslation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} eventKey="1"
              to="/" >{t('home')}
            </Nav.Link>

            <Nav.Link as={Link} eventKey="2"
              to="products" >{t('products')}
            </Nav.Link>

            <Nav.Link as={Link} eventKey="3"
              to="services" >services
            </Nav.Link>

            <Nav.Link as={Link} eventKey="4"
              to="about" >{t('about')}
            </Nav.Link>

            <Nav.Link as={Link} eventKey="5"
              to="contact" >{t('contact')}
            </Nav.Link>

            <Nav.Link as={Link} eventKey="7"
              to="dashboard" >{t('product inquiry')}
            </Nav.Link>
          </Nav>

          <Nav>
            {user ? (

              <Nav.Link as={Link} eventKey="8"
                to="/login"  onClick={logOut}>
                {t('logOut')}
              </Nav.Link>

            ) : (
              <Nav.Link as={Link} eventKey="9" className='btn btn-primary'
                to="login" >
                {t('login')}
              </Nav.Link>


            )}
          </Nav>

          <Nav>
            <Nav.Link eventKey="10" >
              <LanguageSwitcher />
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Menu