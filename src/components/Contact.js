import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [status, setStatus] = useState("submit");
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const submitForm = async (data) => {

    // console.log(data)
    // e.preventDefault();
    i18n.language === "fr" ? setStatus("Evoyer...") : setStatus("Sending...");
    setLoading(true);
    // const { name, email, phone, message } = e.target.elements;
    // let details = {
    //   name: name.value,
    //   email: email.value,
    //   phone: phone.value,
    //   message: message.value,
    // };
    let response = await fetch("https://exeltechcontactform.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    setStatus("submit");
    let result = await response.json();
    setLoading(false);
    alert(result.status);
    reset();
  };

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">{t('Contact US')}</h2>
            <h3 className="section-subheading text-muted">{t('Contact-subheading')}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={handleSubmit(submitForm)} id="contactForm" name="sentMessage" >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" id="name" type="text" placeholder={t('Your name')}
                      {...register("name", { required: true, maxLength: 10 })} />
                    {errors.name && <p className="help-block text-danger">{t('Please enter your name.')}</p>}
                  </div>

                  <div className="form-group">
                    <input className="form-control" id="email" type="email" placeholder={t('Your email')}
                      {...register("email",
                        {
                          required: true,
                          pattern: /^\w+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/
                        })} />
                    {errors.email && errors.email.type === 'required' && <p className="help-block text-danger">{t('Please enter your email.')}</p>}
                    {errors.email && errors.email.type === 'pattern' && <p className="help-block text-danger">{t('Please enter a valid email')}</p>}
                  </div>

                  <div className="form-group">
                    <input className="form-control" id="phone" type="text" placeholder={t('Your phone')}
                      {...register("phone",
                        {
                          required: true,
                          pattern: {
                            value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
                            message: "Please match requested format 000-000-0000.",
                          }
                        })
                      } />
                    {errors.phone && errors.phone.type === 'required' && <p className="help-block text-danger">{t('Please enter your phone number.')}</p>}
                    {errors.phone && errors.phone.type === 'pattern' && <p className="help-block text-danger">{t(errors.phone.message)}</p>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" id="message" placeholder={t('Your message')}
                      {...register("message",
                        { required: true, maxLength: 100 })
                      } />
                    {errors.message && errors.message.type === 'required' && <p className="help-block text-danger">{t('Please enter a message.')}</p>}
                    {errors.message && errors.message.type === 'maxLength' && <p className="help-block text-danger">{t('Max length exceeded.')}</p>}
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" disabled={loading} className="btn btn-primary btn-xl text-uppercase" type="submit">{t(status)}</button>
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