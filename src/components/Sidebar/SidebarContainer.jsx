import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {getUserProfile, savePhoto} from './../../redux/profile-reducer';
import Sidebar from './Sidebar';
import { compose } from 'redux';
import {withRouter} from 'react-router-dom';


class SidebarContainer extends PureComponent {
  
refreshProfile () {
    let userId = this.props.match.params.userId;
    if (!userId) {
        userId = this.props.authorizedUserId;
        if (!userId) {
            this.props.history.push('/login');
        }
    }
    this.props.getUserProfile(userId);
}    
componentDidMount() {
    this.refreshProfile();
}
  
  render () {
    return <Sidebar profile={this.props.profile} 
      savePhoto={this.props.savePhoto}
      isOwner={!this.props.match.params.userId} />
    }
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose (connect (mapStateToProps, {getUserProfile, savePhoto}),
withRouter, )
(SidebarContainer);