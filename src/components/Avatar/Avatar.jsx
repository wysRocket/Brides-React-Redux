import React from "react";
import PropTypes from "prop-types";

import { generateAvatarFromHash } from "../../utils";

const Avatar = ({ user }) => {
  if (user.avatar) {
    return (
      <img
        className="avatar"
        src={user.avatar}
        alt={`Avatar ${user.fullname}`}
      />
    );
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user._id);
    const firstChar = user.fullname[0].toUpperCase();
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
        }}
        className="avatar avatar--symbol"
      >
        {firstChar}
      </div>
    );
  }
};

Avatar.propTypes = {
  className: PropTypes.string,
};

Avatar.defaultProps = {
  user: { fullname: "Daryna", _id: "16e68d13b2678d793d340b9fb0c79297d" },
};

export default Avatar;
