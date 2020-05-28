import React from "react";
import emptyStar from "../../assets/star1.png";
import fullStar from "../../assets/star2.png";

const FollowingStarButton = ({
  user,
  followingInProgress,
  unfollow,
  follow,
}) => {
  return (
    <>
      {user.followed ? (
        <img
          alt=""
          disabled={followingInProgress.some((id) => id === user.id)}
          src={fullStar}
          className="check_star"
          onClick={() => {
            unfollow(user.id);
          }}
        />
      ) : (
        <img
          alt=""
          disabled={followingInProgress.some((id) => id === user.id)}
          src={emptyStar}
          className="check_star"
          onClick={() => {
            follow(user.id);
          }}
        />
      )}
    </>
  );
};

export default FollowingStarButton;
