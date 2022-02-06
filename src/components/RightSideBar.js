import React from 'react';
import styled from 'styled-components';

export const RightSideBar = () => {
  return (
    <Container>
      <SetAccount>
        <h4>Set Up Your Account</h4>
        <div>
          <input type='checkbox' id='check1' />
          <label for='check1'>Visit your feed</label>
        </div>
        <div>
          <input type='checkbox' id='check2' />
          <label for='check2'>Follow 5 more spaces</label>
        </div>
        <div>
          <input type='checkbox' id='check3' />
          <label for='check3'>Upvote 5 more good pieces of content</label>
        </div>
        <div>
          <input type='checkbox' id='check4' />
          <label for='check4'>Ask a question</label>
        </div>
        <div>
          <input type='checkbox' id='check5' />
          <label for='check5'>Answer a question</label>
        </div>
        <div>
          <input type='checkbox' id='check6' />
          <label for='check6'>Add 3 credentials about where you live, work</label>
        </div>
      </SetAccount>
      <FollowReco>
        <h4>Spaces to follow</h4>
        <div className='follows'>
          <div className='follow'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png' alt='profile' />
            <div>
              <p className='name'>SEO Tips & Tools</p>
              <p className='detail'>There are many free SEO tips & tools for business...</p>
            </div>
          </div>
          <div className='follow'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png' alt='profile' />
            <div>
              <p className='name'>SEO Tips & Tools</p>
              <p className='detail'>There are many free SEO tips & tools for business...</p>
            </div>
          </div>
          <div className='follow'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png' alt='profile' />
            <div>
              <p className='name'>SEO Tips & Tools</p>
              <p className='detail'>There are many free SEO tips & tools for business...</p>
            </div>
          </div>
          <div className='follow'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png' alt='profile' />
            <div>
              <p className='name'>SEO Tips & Tools</p>
              <p className='detail'>There are many free SEO tips & tools for business...</p>
            </div>
          </div>
          <div className='follow'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png' alt='profile' />
            <div>
              <p className='name'>SEO Tips & Tools</p>
              <p className='detail'>There are many free SEO tips & tools for business...</p>
            </div>
          </div>
          <div className='follow'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png' alt='profile' />
            <div>
              <p className='name'>SEO Tips & Tools</p>
              <p className='detail'>There are many free SEO tips & tools for business...</p>
            </div>
          </div>
        </div>
      </FollowReco>
    </Container>
  );
};

const Container = styled.div`
  flex: .2;
  @media (max-width: 768px){
    display: none;
  }
`;

const SetAccount = styled.div`
  background-color: #fff;
  border: 1px solid lightgray;

  h4{
    background-color: brown;
    color: #fff;
    border-bottom: 1px solid lightgray;
    padding: 10px 15px;
  }
  div{
    cursor:pointer;
    display:flex;
    align-items: center;
    padding: 8px 15px;
    border-bottom: 1px solid lightgray;
    font-size: 13px;

    input{
      margin-right: 10px;
    }

  }
  div:last-child{
    border-bottom: none;
  }

  div:hover{
    background-color: #eee;
  }

  margin-bottom: 15px;
`;

const FollowReco = styled.div`
  background-color: #fff;
  border: 1px solid lightgray;

  h4{
    background-color: pink;
    color: brown;
    border-bottom: 1px solid lightgray;
    padding: 10px 15px;
  }

  .follows{

    .follow{
      cursor:pointer;
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid lightgray;

      img{
        width: 25px;
        height: 25px;
        margin-right: 8px;
      }
  
      div{
        display: flex;
        flex-direction: column;

        .name{
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 5px;
        }
        
        .detail{
          font-size: 11px;
          color: #777;
        }
      }
    }
    
    .follow:hover{
      background: #eee; 
    }

    .follow:last-child{
      border-bottom: none;
    }

  }


`;