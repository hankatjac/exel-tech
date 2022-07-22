import React, { useEffect, useState } from 'react';
import { Modal, Button } from "react-bootstrap";

const ListServices = ({ ourServices }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalData, setModalData] = useState(ourServices[1]);


  // useEffect(onClick, [])

  return (

    <>
      <section className="bg-light page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">Exel-Tech provides a wide variety of computer services.</h3>
            </div>
          </div>
          <div className="row">{

            ourServices.map((ourService) => {

              const { description, image } = ourService;
              return (
                <div className="col-md-4 col-sm-6" onClick={() => {
                  setModalData(ourService);
                  setShow(true);
                }}>
                  <div className="portfolio-item" >
                    {/* <a className="portfolio-link"> */}
                    <img className="img-fluid" src={image} alt="" />
                    {/* </a> */}
                    <div className="portfolio-caption">

                      <p className="text-muted">{description}</p>
                    </div>
                  </div>
                </div>
              );
            })
          }

          </div>
        </div>
      </section>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>

          <Modal.Title>
            <div>
              <h2 className="text-uppercase">{modalData.description}</h2>
              <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
            </div>

          </Modal.Title>

        </Modal.Header>

        <Modal.Body>
          <div key={modalData.id}>
            <img className="img-fluid d-block mx-auto" src={modalData.image} alt="" />

          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button> */}
        </Modal.Footer>

      </Modal>
    </>

  )


}

export default ListServices



