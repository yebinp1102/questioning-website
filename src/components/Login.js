import React,{useState} from 'react';
import styled from 'styled-components';
import {auth, provider} from '../firebase/firebase'

import FlareIcon from '@mui/icons-material/Flare';
import { ArrowForwardIos } from '@mui/icons-material';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      (auth)=>{
        console.log(auth);
      }).catch((e)=>alert(e.message));
    setEmail("");
    setPassword("");
  }

  const handleRegister = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if(auth){
        console.log(auth)
      }
    }).catch((e) => alert(e.message));
    setEmail("");
    setPassword("");
  }

  const signIn = () => {
    auth.signInWithPopup(provider).catch((e)=> alert(e.message));
    console.log(auth)
  }
  
  return (
  <BackgroundImage>
    <Container>
      <Logo>
        <FlareIcon /> <span>Questioning</span>
      </Logo>
      <Description>
        <h3>A place to share knowledge and better understand the world</h3>
      </Description>
      <LoginAuth>
        <div className='login_options'>
          <div className='login_option'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png' alt='google logo'></img>
            <p onClick={signIn}>Continue with Google</p>
          </div>
          <div className='login_option'>
            <img className='login_logo' src='https://04.cadwork.com/wp-content/uploads/logo-facebook.png' alt='google logo'></img>
            <p>Continue with Facebook</p>
          </div>
          <div className='sign_up_email'>
            <p>Sign up with email</p>
          </div>
          <div className='login_description'>
            <p>By continuing you indicate that you agree to Quora’s Terms of Service and Privacy Policy.</p>
          </div>
        </div>
        <div className='login_email'>
          <div className='login_label'>
            <h4>Login</h4>
          </div>
          <div className='login_fields'>
            <div className='login_field'>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='Email' />
            </div>
            <div className='login_field'>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' />
            </div>
          </div>
          <div className='login_forgot'>
            <p>Forgot password?</p>
            <button type='submit' onClick={handleLogin}>Login</button>
          </div>
          <button onClick={handleRegister} className='sign_up_btn'>Sign up</button>
        </div>
      </LoginAuth>
      <Languages>
        <p>Language Setting</p>
        <ArrowForwardIos />
      </Languages>
      <Footer>
        <p>About •</p>
        <p>Location •</p>
        <p>Contact •</p>
        <p>Privacy •</p>
        <p>Terms •</p>
        <p>Careers</p>
      </Footer>
    </Container>
  </BackgroundImage>
  );
};

export default Login;

const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #666;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-size: 3rem;
  font-weight: bold;
  color: brown;

  .MuiSvgIcon-root{
    margin-right: 10px;
    font-size: 3rem;
  }
`;

const Description = styled.div`
  text-align: center;
  margin-top: 10px;
  color: #888;
`;

const LoginAuth = styled.div`
  display: flex;
  padding: 15px;
  margin-top: 50px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;

  .login_options{
    display: flex;
    flex: .5;
    flex-direction: column;
    padding: 20px;
    border-right: 1px solid lightgray;

    .login_option{
      display: flex;
      align-items: center;
      padding: 7px;
      border: 1px solid lightgray;
      border-radius: 5px;
      cursor: pointer;

      .login_logo{
        height: 30px;
        margin-right: 10px;
      }
    }
    .login_option:first-child{
      margin-bottom: 15px;
    }

    .login_option:hover{
      background-color: #E0E0E0;
    }

    .sign_up_email{
      padding: 15px;
      border-radius: 5px;
      margin: 5px 0;
      color: #555;
      font-size: 15px;
      font-weight: 600;
      text-align: center;
      border-bottom: 1px solid lightgray;
    }
    .sign_up_email:hover{
      background-color: #E0E0E0;
    }

    .login_description{
      color: #555;
      font-size: 14px;
      padding-top: 10px;
    }
  }
  
  .login_email{
    padding: 20px;
    flex: .5;

    .login_label{
      border-bottom: 1px solid lightgray;
      padding: 10px 0;
    }
    .login_fields{
      padding: 10px 0;
      
      .login_field{
        input{
          width: 100%;
          padding: 10px 5px;
          border: 1px solid lightgray;
          border-radius: 5px;
          outline: none;
          margin-bottom: 10px;
        }
      }
    }

    .login_forgot{
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #777;
      cursor: pointer;

      button{
        border: none;
        padding: 10px 15px;
        background-color: brown;
        border-radius: 20px;
        color: #fff;
        cursor: pointer;
      }
    }
    .sign_up_btn {
      margin-top: 15px;
      width: 100%;
      background-color: brown;
      border: none;
      color: #fff;
      padding: 10px;
      border-radius: 5px;
    }
  }
`;

const Languages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;

  .MuiSvgIcon-root{
    font-size: 1rem;
    margin-left: 5px;
  }
  &:hover{
    color: brown;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  color: #555;
  font-size: 14px;
  padding: 15px;
  background-color: lightgray;
  border-radius: 0 0 8px 8px;

  p{
    margin-right: 5px;
    cursor: pointer;
  }

`;