import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-transform: lowercase;
  background: pink;
  color: white;
  text-align: center;
`;

const Card = ({ cardInfo, following }) => {
  return (
    <MainContainer>
      <div>
        <img width="100px" src={cardInfo.avatar_url} />
        <p>name: {cardInfo.name}</p>
        <p>login: {cardInfo.login}</p>
        <p>location: {cardInfo.location}</p>
        <p>bio: {cardInfo.bio}</p>

        <div>
          {following.map((item, i) => (
            <div>
              <img width="100px" src={item.avatar_url} />
              <p>login: {item.login}</p>
              <p>url: {item.url}</p>
            </div>
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default Card;
