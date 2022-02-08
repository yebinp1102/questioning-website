import './App.css';
import  Questioning from './components/Questioning';
import  Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './redux/actions/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase/firebase';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        }))
      }else{
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <div className="App">
      {
        user ? (<Questioning />) : (<Login />)
      }
    </div>
  );
}

export default App;
