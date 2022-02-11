import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/actions/userSlice';
import { Avatar } from '@mui/material';
import Post from './Post';

export const Feed = () => {
  const user = useSelector(selectUser);


  return (
    <Container>
      <MyFeed>
        <User>
          <Avatar src={user.photo} />
          <span>{user.displayName}</span>
        </User>
        <h3>What do you want to ask or share?</h3>
      </MyFeed>
      <Post />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyFeed = styled.div`
  cursor: pointer;
  background-color: #fff;
  margin-bottom: 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  color: #888;

  &:hover{
    border: 1px solid brown;
  }

  .MuiAvatar-root{
    transform: scale(0.7);
    z-index: 1;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;