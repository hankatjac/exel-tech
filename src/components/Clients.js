import React from 'react';
import facebook from '../assets/img/logos/facebook.svg';
import google from '../assets/img/logos/google.svg';
import ibm from '../assets/img/logos/ibm.svg';
import microsoft from '../assets/img/logos/microsoft.svg';

const Clients = () => {
  return (
    <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#">
            <img className="img-fluid d-block mx-auto" src={facebook} alt="" />
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#">
            <img className="img-fluid d-block mx-auto" src={google} alt="" />
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#">
            <img className="img-fluid d-block mx-auto" src={ibm} alt="" />
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#">
            <img className="img-fluid d-block mx-auto" src={microsoft} alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Clients