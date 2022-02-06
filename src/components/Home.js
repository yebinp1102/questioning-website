import React from 'react';
import styled from 'styled-components';
import { Feed } from './Feed';
import { RightSideBar } from './RightSideBar';

export const Home = () => {
  return (
    <Container>
      <Wrap>
        <LeftSideBar>
          <h4>My Interest</h4>
          <li>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png' alt='korean flag' />
            <span>Korea</span>
          </li>
          <li>
            <img src='https://cdn.theatlantic.com/thumbor/6PdDoRIn87RmtPEX_S8M2a68j8Y=/0x0:2000x1125/1600x900/media/img/mt/2021/10/ScienceWriting-1/original.jpg' alt='science' />
            <span>Science</span>
          </li>
          <li>
            <img src='https://ebazzarbd.com/wp-content/uploads/2021/03/Food.jpg' alt='food' />
            <span>Food</span>
          </li>
          <li>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAS9-kayNZlWrtefH7LlyaItwUxsk4kprTA&usqp=CAU' alt='health' />
            <span>Health</span>
          </li>
          <li>
            <img src='https://64.media.tumblr.com/6a14a8e3c37d1c95967f59b23f707747/tumblr_nsgqgiSSXw1t7cmmpo1_1280.png' alt='movies' />
            <span>Movies</span>
          </li>
          <li>
            <img src='https://www.computerhope.com/jargon/t/technology.jpg' alt='technology' />
            <span>Technology</span>
          </li>
        </LeftSideBar>
        <Main>
          <Feed />
        </Main>
        <RightSideBar />
      </Wrap>
    </Container>
  )
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #F6F6F6;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 100px;
  display: flex;
`;

const LeftSideBar = styled.ul`
  flex: .2;
  color: #555;

  h4{
    text-align: center;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: brown;
  }

  li{
    padding: 15px;
    border-bottom: 1px solid lightgray;
    transition: all .2s ease-in;
    display: flex;

    img{
      width: 30px;
      height: 20px;
      margin-right: 10px;
      border-radius: 5px;
    }
  }
  li:last-child{
    border-bottom: none;
  }

  li:hover{
    background-color: brown;
    font-weight: bold;
    color: #fff;
  }
`;

const Main = styled.div`
  margin-right: 30px;
  margin-left: 30px;
  flex: .6;

  @media (max-width: 768px){
    flex: .8;
  }
`;