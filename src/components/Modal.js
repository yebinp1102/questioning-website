import React, {useState} from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/actions/userSlice';
import { Avatar } from '@mui/material';
import { Input } from '@material-ui/core';
import LinkIcon from '@mui/icons-material/Link';
import { ExpandMore, PeopleAltOutlined } from '@mui/icons-material';
import { db } from '../firebase/firebase';
import firebase from 'firebase/compat/app';

const Modal = ({modalOpen}) => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const handleQuestion = (e) => {
    e.preventDefault();
    modalOpen(false);
    db.collection('questions').add({
      question : input,
      imageUrl : inputUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user,
    });
    setInput("");
    setInputUrl("");
  }

  return (
    <ModalBackground>
      <ModalContainer>
        <div className='closeBtn'>
          <button onClick={()=>modalOpen(false)} className='close'>X</button>
        </div>
        <Title>
          <h5>Question</h5>
          <h5>Share</h5>
        </Title>
        <ModalInfo>
          <div className='user_info'>
            <Avatar src={user.photo} />
            <p>User : {user.displayName ? user.displayName : user.email}</p>
            <div className='modal_scope'>
              <PeopleAltOutlined />
              <p>To everyone</p>
              <ExpandMore />
            </div>
          </div>
          <div className='modal_field'>
            <Input type='text' placeholder='Ask you question' required value={input} onChange={(e)=>setInput(e.target.value)} />
            <div className='modal_fieldLink'>
              <LinkIcon />
              <Input type='text' placeholder='url link' required value={inputUrl} onChange={(e)=>setInputUrl(e.target.value)} />
            </div>
          </div>
        </ModalInfo>
        <Footer>
          <button onClick={handleQuestion} className='add'>Ask</button>
        </Footer>
      </ModalContainer>
    </ModalBackground>
  )
}

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(200, 200, 200, .8);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;

const ModalContainer = styled.div`
  width: 600px;
  height: 600px;
  background: #fff;
  box-shadow: rgba(0,0,0,.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 12px;

  .closeBtn{
    display:flex;
    justify-content: flex-end;
  }
`;

const Title = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;

  h5{
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
  }
  h5:hover{
    background-color: brown;
    color: #fff;
  }
`;

const ModalInfo = styled.div`
  padding: 10px;

  .user_info{
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .modal_scope{
      display: flex;
      color: brown;
      font-weight: bold;
      margin-left: 10px;
      cursor: pointer;
    }
  }

  .modal_field{
    display: flex;
    flex-direction: column;
    flex: 1;

    .modal_fieldLink{
      color: brown;
      display: flex;
      align-items: center;
      margin-top: 10px;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 290px;

  .add{
  }
`;