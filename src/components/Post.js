import React from 'react';
import styled from 'styled-components';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Post = () => {
  return (
    <OthersFeed>
        <UserInfo>
          <AccountCircleIcon />
          <UserDetail>
            <h5>Joon Lee</h5>
            <p>ESL Instructor (2019-present)</p>
          </UserDetail>
        </UserInfo>
        <Contents>
          <h4>Can you tell me 3 ranadom things about South Korea?</h4>
          <p>Most Koreans regret not being able to speak English after 
            putting in almost a decade of studying it.
            My cousins both have advanced degrees in 
            English from Korea, lived in the states with
            me for a few years, and still can’t speak English all that well</p>
        </Contents>
        <ContentImage>
          <img src='https://www.90daykorean.com/wp-content/uploads/2015/07/Community-Korea-Language-Exchange-in-Gangnam.jpg' alt="friends" />
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
            <MoreHorizIcon />
          </LeftUIs>
        </UIs>
      </OthersFeed>
  )
}

export default Post;

const OthersFeed = styled.div`
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

const LeftUIs = styled(RightUIs)``;
