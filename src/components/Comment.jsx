import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span``;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          temporibus quasi explicabo. Amet consequuntur explicabo, nostrum ad
          velit ratione modi!
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
