import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppStateType } from '../redux/redux-store'

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
})
type MapPropsType = {
  isAuth: boolean
}
export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  const RedirectComponent: React.FC<MapPropsType> = (props) => {
    const { isAuth, ...restProps } = props
    if (!props.isAuth) return <Redirect to='/login' />
    return <WrappedComponent {...(restProps as WCP)} />
  }
  const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
  return ConnectedRedirectComponent
}
