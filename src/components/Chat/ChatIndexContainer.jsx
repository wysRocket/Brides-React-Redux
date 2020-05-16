import { compose } from "redux";
import { sendMessageCreator } from "../../redux/chat-reducer";
import { connect } from "react-redux";
import ChatIndex from "./ChatIndex";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    chatsPage: state.chatsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
  //   withAuthRedirect,
)(ChatIndex);
