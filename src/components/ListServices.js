import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ListServices = ({ ourServices }) => {
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [modalData, setModalData] = useState(ourServices[0]);
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-light page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">{t('Service-subheading')}</h3>
            </div>
          </div>
          <div className="row">{
            ourServices.map((ourService) => {
              const { id, description, image } = ourService;
              return (
                <div className="col-md-4 col-sm-6" style={{ cursor: 'pointer' }}  key={id} onClick={() => {
                  setModalData(ourService);
                  setShow(true);
                }}>
                  <div className="portfolio-item"  >
                    {/* <a className="portfolio-link"> */}
                    <img className="img-fluid" src={image} alt="" />
                    {/* </a> */}
                    <div className="portfolio-caption">
                      <p className="text-muted">{t(description)}</p>
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
              <h2 className="text-uppercase">{t(modalData.description)}</h2>
              {/* <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p> */}
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
            {t('Close')}
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



