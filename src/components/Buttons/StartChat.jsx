import React from "react";
import { NavLink } from "react-router-dom";

const StartChatButton = (props) => {
  return (
    <>
      <NavLink to="/main" className="btn_chatstart">
        Start a Chat
      </NavLink>
    </>
  );
};

export default StartChatButton;
