import React from "react";

const Avatar = ({ avatar, alt }) => {
  return <img className="md:h-56 h-64" src={avatar} alt={alt} />;
};

export default Avatar;
