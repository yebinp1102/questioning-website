import React, {useState} from 'react';
import styled from 'styled-components';
import FlareIcon from '@mui/icons-material/Flare';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/actions/userSlice';
import { Avatar } from '@mui/material';
import { auth } from '../firebase/firebase';
import Modal from './Modal';

export const Header = () => {
  const user = useSelector(selectUser);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <Wrap>
        <Logo>
          <FlareIcon /> <span>Questioning</span>
        </Logo>

        <MenuIcons>
          <li><HomeIcon /></li>
          <li><ListAltIcon /></li>
          <li> <AccountBoxIcon /></li>
          <li><PeopleIcon /></li>
          <li><NotificationsActiveIcon /></li>
          <li><LanguageIcon /></li>
        </MenuIcons>

        <SearchBar>
          <SearchIcon/>
          <input type="text" placeholder='Search Question' />
        </SearchBar>

        <RightMenus>
          <Avatar src={user.photo} onClick={() => auth.signOut()} />
          <button onClick={()=>setOpenModal(true)}>Add Question</button>
          { openModal && <Modal modalOpen={setOpenModal} />}
        </RightMenus>

      </Wrap>
    </Container>
  )
};

// CSS

const Container = styled.div`
  background: pink;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 10;
`;

const Wrap = styled.div`
  padding: 15px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

`;

const Logo =styled.div`
  display: flex;
  align-items: center;
  color: brown;

  span{
    font-size: 1.4rem;
    font-weight: bold;
  }

  .MuiSvgIcon-root{
    margin-right: 5px;
  }
`;

const MenuIcons = styled.ul`
  display: flex;
  align-items: center;
  
  li{
    margin-right: 10px;
    color: brown;
    cursor: pointer;

    .MuiSvgIcon-root{
      font-size: 1.5rem;
      transition: all .1s ease-in;
    }

    .MuiSvgIcon-root:hover{
      color: #fff;
    }
  }
  @media (max-width: 768px){
    display: none;
  }

`;

const SearchBar = styled.div`
  border: 1px solid #fff;
  padding: 0 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex: .5;
 
  .MuiSvgIcon-root{
    margin-right: 10px;
    color: #fff;
  }

  input{
    min-width: 100px;
    background: transparent;
    border: none;
    outline: none;
  }
  
  input::placeholder{
    color: #fff;
    font-weight: bold;
  }
`;

const RightMenus = styled.div`
  display: flex;
  align-items: center;

  .MuiAvatar-root{
    transform: scale(0.85);
    cursor:pointer;
  }

  button{
    border: none;
    margin-left: 10px;
    background: #fff;
    padding: 8px;
    color: brown;
    border-radius: 5px;
    transition: all .1s ease-in;
    cursor: pointer;
  }

  button:hover{
    background-color: brown;
    color: #fff;
  }

  Modal{
    .modal_title{
      display: flex;
    }
  }
  
`;