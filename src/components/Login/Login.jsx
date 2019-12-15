import React from 'react';
import style from './Login.module.css';
import lp_gphoto from './../img/photo.jpg';
import { Field, reduxForm } from 'redux-form';
import { Input } from './../FormControls/FormControl';
import { required } from '../../validators/validators';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom'

const LoginForm = (props) => {
  
  return (
  <div className={style.login_form}>
      <div > 
        <span className={style.fa_facebook}>f </span>
        <span className={style.login_fb}> Login using Facebook </span>
      </div>
      <div className={style.logform_text}>Please enter your login information below</div>
        {props.error && <div className={style.auth_error}>{props.error}</div>}
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name={"email"} component={Input} validate={required} placeholder={"ivan@vitenko.com"} />
        </div>
        <div>
          <Field name={"password"} component={Input} validate={required} placeholder={"Password"} type={"password"} />
        </div>
        <div className={style.checkbox}>
          <Field name={"rememberMe"} component={Input} type={"checkbox"} /> remember Me
        </div>
        <div className={style.btns}>
          <a className={style.forgot_btn} href="#">Forgot your password?</a>
          <button className={style.prcd_btn} href="#">Proceed</button>
        </div>
      </form>
    </div>
)}

const LoginReduxForm = reduxForm({form: 'main_login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
  props.login(formData.email, formData.password, formData.rememberMe)
}
  if (props.isAuth) {
    return <Redirect to = {"/profile"} />
  }
return (
<div className={style.login_page}>
  <div className={style.login_column}>
    <h2 className={style.column_name}>Login</h2>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
  <div className={style.welcome_column}>
    <h2 className={style.column_name}>Welcome to Brides.dating</h2>

    <div className={style.girls_block}>
      <div className="prev_anketa">
        <div className="link_img">
          <a href="#0" className={style.img_block}>
            <img src={lp_gphoto} alt="" /> </a>
          <a href="#0" className={style.online_ind}>Online</a>
        </div>
        <h3 className={style.user_name}>Anastasia<span className="id_online"></span></h3>
        <span class="from-city">25 years old from Lviv</span>
      </div>
      <div className="prev_anketa">
        <div className="link_img">
          <a href="#0" className={style.img_block}>
            <img src={lp_gphoto} alt="" /> </a>
          <a href="#0" className={style.online_ind}>Online</a>
        </div>
        <h3 className={style.user_name}>Anastasia<span className="id_online"></span></h3>
        <span class="from-city">25 years old from Lviv</span>
      </div>
      <div className="prev_anketa">
        <div className="link_img">
          <a href="#0" className={style.img_block}>
            <img src={lp_gphoto} alt="" /> </a>
          <a href="#0" className={style.online_ind}>Online</a>
        </div>
        <h3 className={style.user_name}>Anastasia<span className="id_online"></span></h3>
        <span class="from-city">25 years old from Lviv</span>
      </div>
      <div className="prev_anketa">
        <div className="link_img">
          <a href="#0" className={style.img_block}>
            <img src={lp_gphoto} alt="" /> </a>
          <a href="#0" className={style.online_ind}>Online</a>
        </div>
        <h3 className={style.user_name}>Anastasia<span className="id_online"></span></h3>
        <span class="from-city">25 years old from Lviv</span>
      </div>
    </div>
  </div>
</div>
);
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, { login }) (Login);