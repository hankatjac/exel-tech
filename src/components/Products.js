import React from 'react'

const Products = ({ products }) => {
return (

<section className="page-section" id="products">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">products</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row text-center">{

        products.map(

          (product) => {
            const { id, productName, image } = product;

            return (
              <div className="col-md-4" dey={id}>
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                
                <p className="text-muted">{image}</p>
                <h4 className="service-heading">{productName}</h4>
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
