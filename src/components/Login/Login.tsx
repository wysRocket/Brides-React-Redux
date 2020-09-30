import React from 'react'
import style from './Login.module.css'
import lp_gphoto from '../../assets/photo.jpg'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { Input } from '../FormControls/FormControl'
import { required } from '../../validators/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { AppStateType } from '../../redux/redux-store'

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({ handleSubmit, error }) => {
  return (
    <div className={style.login_form}>
      <div>
        <span className={style.fa_facebook}>f </span>
        <Button className={style.login_fb} variant='primary' size='sm'>
          Login using Facebook
        </Button>
      </div>
      <div className={style.logform_text}>Please enter your login information below</div>
      {error && <div className={style.auth_error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name={'email'}
            component={Input}
            validate={required}
            placeholder={'ivan@vitenko.com'}
          />
        </div>
        <div>
          <Field
            name={'password'}
            component={Input}
            validate={required}
            placeholder={'Password'}
            type={'password'}
          />
        </div>
        <div className={style.checkbox}>
          <Field name={'rememberMe'} component={Input} type={'checkbox'} />
          remember Me
        </div>
        <div className={style.btns}>
          <a className={style.forgot_btn} href='#'>
            Forgot your password?
          </a>
          <button className={style.prcd_btn}>Proceed</button>
        </div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType>({ form: 'main_login' })(LoginForm)

type MapStateToPropsType = {
  isAuth: boolean
}
type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
}
type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
}
const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div className={style.login_page}>
      <div className={style.login_column}>
        <h2 className={style.column_name}>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
      <div className={style.welcome_column}>
        <h2 className={style.column_name}>Welcome to Brides.dating</h2>

        <div className={style.girls_block}>
          <Prev_anketa />
          <Prev_anketa />
          <Prev_anketa />
          <Prev_anketa />
        </div>
      </div>
    </div>
  )
}
const Prev_anketa = () => {
  return (
    <div className='prev_anketa'>
      <div className={style.link_img}>
        <a href='#0' className={style.img_block}>
          <img src={lp_gphoto} alt='' />
        </a>
        <a href='#0' className={style.online_ind}>
          Online
        </a>
      </div>
      <h3 className={style.user_name}>
        Anastasia<span className='id_online'></span>
      </h3>
      <span className='from-city'>25 years old from Lviv</span>
    </div>
  )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
