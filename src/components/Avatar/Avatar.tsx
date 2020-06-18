import React from "react";

type Props = {
  avatar: string;
  alt: string;
};

const Avatar: React.FunctionComponent<Props> = ({ avatar, alt }) => {
  return (
    <img className="md:h-56 h-64" src={avatar} alt={alt} data-testid="avatar" />
  );
};

export default Avatar;
