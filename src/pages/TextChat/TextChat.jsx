import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Messages, ChatInput, Status, Sidebar } from "../../containers";
import { connect } from "react-redux";

import { dialogsActions } from "../../redux/actions";

const TextChat = (props) => {
  const { setCurrentDialogId, user } = props;
  useEffect(() => {
    const { pathname } = props.location;
    const dialogId = pathname.split("/").pop();
    setCurrentDialogId(dialogId);
  }, [props.location.pathname]);

  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
        {user && (
          <div className="chat__dialog">
            <Status />
            <Messages />
            <div className="chat__dialog-input">
              <ChatInput />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

let mapStateToProps = (state) => {
  return {
    user: state.chatsPage.user,
  };
};

export default withRouter(
  connect(mapStateToProps, { dialogsActions })(TextChat)
);
