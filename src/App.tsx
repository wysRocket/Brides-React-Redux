import React from 'react'
import './scss/_styles.scss'
import './App.css'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { HeaderContainer, SidebarContainer, Footer, LoadingModal } from './components'
import Login from './components/Login/Login'
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withSuspense } from './hoc/withSuspense'
import { PNF1 } from './pages'
import ProfileContainer from './components/Profile/ProfileContainer'
import { AppStateType } from './redux/redux-store'

const Catalog = React.lazy(() => import('./pages/Catalog/Catalog'))
const ChatIndex = React.lazy(() => import('./components/Chat/ChatIndex'))
const TextChat = React.lazy(() => import('./pages/TextChat/TextChat'))

type MapPropsType = { initialized: boolean }
type DispatchPropsType = { initializeApp: () => void }
class App extends React.Component<MapPropsType & DispatchPropsType> {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <LoadingModal />
    }

    return (
      <div className='app_container'>
        <HeaderContainer />
        <div>
          <Switch>
            <Route exact path='/' render={() => <Redirect to={'/main'} />} />
            <Route path='/login' render={() => <Login />} />
            <Route path='/chathistory' render={withSuspense(ChatIndex)} />

            <Route path='/ladiescatalog' render={withSuspense(Catalog)} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/main' render={() => <SidebarContainer />} />
            <Route path='/*' render={() => <PNF1 />} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default compose<React.ComponentType>(
  withRouter,
  connect(({ app }: AppStateType) => ({ initialized: app.initialized }), { initializeApp })
)(App)
