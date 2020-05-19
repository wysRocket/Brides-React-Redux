import React from "react";
import { NavLink } from "react-router-dom";

const StartChatIcon = (props) => {
  return (
    <>
      <NavLink to="/main" className="icon_start_chat">
        Start a Chat
      </NavLink>
    </>
  );
};

export default StartChatIcon;
