import React from 'react'

const Footer = () => {
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
            <span className="copyright">Copyright &copy; Exel-Tech {new Date().getFullYear()}</span>
          </div>
          <div className="col-md-4">
            <div >
              <h2 className='' key="location">LOCATION</h2>
              <ul className='list-inline'>
                <li><a href="#">Phone: (1) 514-335-1300</a></li>
                <li><a href="#">Fax: (1) 514-333-1084</a></li>
                <li><a href="#">e-mail: info@exel-tech.com</a></li>
                <li><a href="#">4455 Boulevard Poirier, Saint-Laurent
                  QC H4R-2A4 Canada</a></li>
                <li><a href="#">Monday to Friday 09:00 AM - 05:00 PM</a></li>
              </ul>
            </div>

          </div>
          <div className="col-md-4">
            <h2>OTHERS</h2>
            <ul className="list-inline quicklinks">
              <li className="">
                <a href="#">Services</a>
              </li>
              <li className="">
                <a href="#">Products</a>
              </li>
              {/* <li className="">
                  <a href="#">Technology</a>
                </li>
                <li className="">
                  <a href="#">Partner</a>
                </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer