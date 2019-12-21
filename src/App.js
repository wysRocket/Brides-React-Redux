import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {Route, withRouter, Switch} from "react-router-dom";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {initializeApp} from './redux/app-reducer';
import {connect} from 'react-redux';
import { compose } from 'redux';
import LoadingModal from './components/Loading/Loading';
import {withSuspense} from './hoc/withSuspense';
const LadCatalogContainer = React.lazy(() => import ('./components/LadCatalog/LadCatalogContainer'));
const ChatIndexContainer = React.lazy(() => import ('./components/Chat/ChatIndexContainer'));

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
          <Switch>
          <Route path='/login' render={ () => <Login />}/>
          <Route path='/chathistory' render={ withSuspense(ChatIndexContainer) } />
          
          <Route path='/ladiescatalog' render={ withSuspense(LadCatalogContainer)}/>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
          <Route path='/' render={ () => <Sidebar />}/>
          </Switch>
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
