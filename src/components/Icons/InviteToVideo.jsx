import React from "react";
import { NavLink } from "react-router-dom";

const InviteToVideoIcon = (props) => {
  return (
    <>
      <NavLink to="/main" className="icon_invite_video">
        Invite to VIdeo Chat
      </NavLink>
    </>
  );
};

export default InviteToVideoIcon;
