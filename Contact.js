import React,{ useState } from 'react';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  const handleSubmit = async (e) => {
    // if (!formRef.current?.reportValidity()) {
    //   return;
    // }
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phone,message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    let response = await fetch("https://exeltechcontactformbackend.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">{t('Contact US')}</h2>
              <h3 className="section-subheading text-muted">For your convenience you can always send us a message at any time through the following form and we will contact you as soon as possible.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit} id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger" ></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">{status}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact