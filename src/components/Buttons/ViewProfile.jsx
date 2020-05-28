import React from "react";
import { NavLink } from "react-router-dom";

const ViewProfileButton = (props) => {
  return (
    <>
      <NavLink to={"/profile/" + props.id} className="view_profile_btn">
        View Profile
      </NavLink>
    </>
  );
};

export default ViewProfileButton;
