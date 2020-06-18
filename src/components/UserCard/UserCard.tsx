import React from "react";

import Avatar from "components/Avatar";
import { User } from "types";

type Props = {
  user: User;
};

const UserCard: React.FunctionComponent<Props> = ({ user }) => {
  return (
    <a
      className="rounded overflow-hidden shadow-lg cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
      href={user.html_url}
    >
      <Avatar avatar={user.avatar_url} alt={user.login} />
      <div className="px-6 py-4">
        <div
          className="font-bold text-xl mb-2 text-gray-600"
          data-testid="user-login"
        >
          {user.login}
        </div>
      </div>
    </a>
  );
};

export default UserCard;
