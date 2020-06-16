import React from "react";

import Avatar from "components/Avatar";

const UserCard = ({ user }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <Avatar avatar={user.avatar_url} alt={user.login} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{user.login}</div>
      </div>
    </div>
  );
};

export default UserCard;
