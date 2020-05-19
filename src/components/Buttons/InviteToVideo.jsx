import React from "react";
import { NavLink } from "react-router-dom";

const InviteToVideoButton = (props) => {
  return (
    <>
      <NavLink to="/main" className="btn_invite_video">
        Invite to VIdeo Chat
      </NavLink>
    </>
  );
};

export default InviteToVideoButton;
