import React from 'react';
import styled from 'styled-components';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';

const Post = ({key, Id, image, question, timestamp, askUser}) => {

  return (
    <OthersFeed>
        <UserInfo>
          <Avatar src={askUser.photo} />
          <UserDetail>
            <h5>{askUser.displayName ? askUser.displayName : askUser.email}</h5>
            <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
          </UserDetail>
        </UserInfo>
        <Contents>
          <h4>{question}</h4>
        </Contents>
        <ContentImage>
          <img src={image} alt="friends" />
        </ContentImage>
        <UIs>
          <RightUIs>
            <div>
              <FavoriteIcon />10.1K
            </div>
            <div><ShareIcon /> 41</div>
            <div><ChatBubbleIcon /> 150</div>
          </RightUIs>
          <LeftUIs>
            <button className='answer'>Answer</button>
            <MoreHorizIcon />
          </LeftUIs>
        </UIs>
      </OthersFeed>
  )
}

export default Post;

const OthersFeed = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 15px;

  display: flex;
  flex-direction: column;

  &:hover{
    background-color: #FFFAFA;
    border: 1px solid brown;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  .MuiSvgIcon-root{
    font-size: 2.25rem;
    color: brown;
    margin-right: 10px;
  }
`;

const UserDetail = styled.div`
  margin-left: 10px;
  h5{
    margin-bottom: 5px;
  }
  p{
    font-size: 13px;
    color: #777;
  }
`;

const Contents = styled.div`
  h4{
    margin: 15px 0 5px 0;
  }
  p{
    width: 100%;
    height: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4;
    letter-spacing: .3px;
  }
`;

const ContentImage = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-column: repeat(auto-fill, minmax(300px, auto));

  img{
    width: 100%;
    height: auto;
  }
  
`;

const UIs = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0 0 0;
`;

const RightUIs = styled.div`
  display: flex;
  align-items: center;

  div{
    display: flex;
    margin-right: 15px;
    font-size: 15px;
  }

  .MuiSvgIcon-root{
    cursor: pointer;
    font-size: 18px;
    color: #666;
    margin-right: 5px;
  }
`;

const LeftUIs = styled(RightUIs)`
  .answer{
    border: none;
    background-color: brown;
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    margin-right: 8px;
    cursor: pointer;
  }
`;
