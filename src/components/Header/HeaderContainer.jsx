import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData} from './../../redux/auth-reducer';


class HeaderContainer extends React.Component {
  
  render () {
    return <Header {...this.props} />
    }
  }
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect (mapStateToProps, {getAuthUserData}) (HeaderContainer);