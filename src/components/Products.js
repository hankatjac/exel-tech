import React from 'react';
import { useTranslation } from "react-i18next";


const Products = ({ products }) => {
  const { t } = useTranslation();
  return (

    <section className="page-section" id="products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">{t('Products')}</h2>
            <h3 className="section-subheading text-muted">{t('Product-subheading')}</h3>
          </div>
        </div>
        <div className="row text-center">{

          products.map(

            (product) => {
              const { id, productName, icon } = product;

              return (
                <div className="col-md-4" key={id}>
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className={icon}></i>
                  </span>

                  {/* <p className="text-muted">{image}</p> */}
                  <h4 className="service-heading">{t(productName)}</h4>
                </div>
              )
            }
          )
        }


        </div>
      </div>
    </section>
  );

}


export default Products
