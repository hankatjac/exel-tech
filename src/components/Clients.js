import React from 'react';
import supermicro from '../assets/img/logos/supermicro.svg';
import intel from '../assets/img/logos/intel.svg';
import hammondmfg from '../assets/img/logos/hammondmfg.svg';
import microsoft from '../assets/img/logos/microsoft.svg';

const Clients = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <a href="https://www.supermicro.com/">
              <img className="img-fluid d-block mx-auto" src={supermicro} alt="supermicro" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="https://www.intel.ca/">
              <img className="img-fluid d-block mx-auto" src={intel} alt="intel" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="https://www.hammfg.com/">
              <img className="img-fluid d-block mx-auto" src={hammondmfg} alt="hammond" />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="https://www.microsoft.com/">
              <img className="img-fluid d-block mx-auto" src={microsoft} alt="microsoft" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients