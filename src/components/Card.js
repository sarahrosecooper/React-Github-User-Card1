import React from "react";

const Card = (props) => {
  return (
    <div>
      <img width="100px" src={props.userCard.avatar_url} />
      <p>name: {props.userCard.name}</p>
      <p>login: {props.userCard.login}</p>
      <p>location: {props.userCard.location}</p>
      <p>bio: {props.userCard.bio}</p>
    </div>
  );
};

export default Card;
