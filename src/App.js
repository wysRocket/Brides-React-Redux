import React from "react";
import "./scss/_styles.scss";
import "./App.css";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import LoadingModal from "./components/Loading/Loading";
import { withSuspense } from "./hoc/withSuspense";
import PNF1 from "./components/404/404-1";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import Footer from "./components/Footer/Footer";
const LadCatalogContainer = React.lazy(() =>
  import("./components/LadCatalog/LadCatalogContainer")
);
const ChatIndexContainer = React.lazy(() =>
  import("./components/Chat/ChatIndexContainer")
);
const TextChat = React.lazy(() => import("./pages/TextChat/TextChat"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <LoadingModal />;
    }

    return (
      <div className="app_container">
        <HeaderContainer />
        <div>
          <Switch>
            <Route exact path="/" render={() => <Redirect to={"/main"} />} />
            <Route path="/login" render={() => <Login />} />
            <Route
              path="/chathistory"
              render={withSuspense(ChatIndexContainer)}
            />
            <Route
              path="/ladiescatalog"
              render={withSuspense(LadCatalogContainer)}
            />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/main" render={() => <SidebarContainer />} />
            <Route path="/*" render={() => <PNF1 />} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
