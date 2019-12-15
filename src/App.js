import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {Route, withRouter} from "react-router-dom";
import ChatIndexContainer from './components/Chat/ChatIndexContainer';
import LadCatalogContainer from './components/LadCatalog/LadCatalogContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {initializeApp} from './redux/app-reducer';
import {connect} from 'react-redux';
import { compose } from 'redux';
import LoadingModal from './components/Loading/Loading';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render () {
    if (!this.props.initialized) {
      return <LoadingModal />
    }
  
    return (
    
    <div className='container'>
      <div className = 'header'><HeaderContainer /> </div>
        <div className = 'body'>
          <Route path='/login' render={ () => <Login />}/>
          <Route path='/chathistory' render={ ()=> <ChatIndexContainer /> } />
          <Route path='/main' render={ () => <Sidebar />}/>
          <Route path='/ladiescatalog' render={ () => <LadCatalogContainer />}/>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
      </div>
    </div>
    
  );
}}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose (
  withRouter,
  connect (mapStateToProps, {initializeApp})) (App);
