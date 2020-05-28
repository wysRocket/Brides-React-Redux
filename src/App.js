import React from "react";
import "./scss/_styles.scss";
import "./App.css";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import {
  HeaderContainer,
  SidebarContainer,
  Footer,
  LoadingModal,
} from "./components";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withSuspense } from "./hoc/withSuspense";
import { PNF1 } from "./pages";
import ProfileContainer from "./components/Profile/ProfileContainer";

const CatalogContainer = React.lazy(() =>
  import("./pages/Catalog/CatalogContainer")
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
              render={withSuspense(CatalogContainer)}
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
