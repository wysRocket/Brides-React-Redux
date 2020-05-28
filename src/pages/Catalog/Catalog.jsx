import React from "react";
import { Paginator, User } from "../../components";

const LadCatalog = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <h3 className="res_search_titile">
        Results:
        <span> {totalUsersCount} </span>
        ladies
      </h3>

      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        totalItemsCount={totalUsersCount}
      />

      <div className="catalog">
        {users.map((u) => (
          <User
            key={u.id}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            user={u}
          />
        ))}
      </div>
    </div>
  );
};

export default LadCatalog;
