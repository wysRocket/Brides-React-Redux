import React from "react";
import { NavLink } from "react-router-dom";

const WriteLetterIcon = (props) => {
  return (
    <>
      <NavLink to="/main" className="icon_write_letter">
        Write a Letter
      </NavLink>
    </>
  );
};

export default WriteLetterIcon;
