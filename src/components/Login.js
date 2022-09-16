import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/auth.service";


const Login = () => {
  const nav = useNavigate();
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }} = useForm();

  // const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submitForm = async (data) => {

    setMessage("");
  
    AuthService.login(data.username, data.password).then(
      () => {
        nav('/dashboard');
        window.location.reload();
      },
      (error) => {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        // setLoading(false);
        setMessage(resMessage);
      }
    );

    // console.log(data);
    // console.log(JSON.stringify(data, null, 2));
    // reset();
  };

  return (
    <section className="page-section" id="login">
     
          <div className="col-lg-6 m-auto">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">{t('login')}</h2>
            </div>

            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
            />

            <form onSubmit={handleSubmit(submitForm)} id="loginForm" name="sentMessage">

              <div className="form-group">
                <label>{t('Username')}</label>
                <input className="form-control" name="username" type="text"
                  {...register("username", { required: true, maxLength: 10 })} />
                {errors.username && <p className="help-block text-danger">{t('Please enter your name.')}</p>}
              </div>

              <div className="form-group">
                <label>{t('Password')}</label>
                <input name="password" type="password"
                  {...register('password', { required: true })}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                />
                {errors.password && <p className="help-block text-danger">Please enter your password</p>}
              </div>

              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success">{message}</div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">{t('login')}</button>
              </div>

            </form>
          </div>
        
    </section>
  )
}

export default Login;
