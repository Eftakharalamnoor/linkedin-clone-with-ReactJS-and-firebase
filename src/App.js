import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import './App.css';
import HomeBody from './components/inside/HomeBody';
import HomeHeader from './components/inside/HomeHeader';
import Header from './components/outside/Header/Header';
import { useDispatch } from 'react-redux';
import { loginUser,logOutUser } from './store/userSlice';
import { auth } from './firebase';
import { useEffect } from 'react';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        // LogIn
        dispatch(loginUser({
          uid: userAuth.uid,
          email: userAuth.email,
          photoURL: userAuth.photoURL,
          displayName: userAuth.displayName
        }))
      }else{
          // LogOut
          dispatch(logOutUser())
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="App">

          <Router>
            <Routes>
              
                <Route path="/" element={<Header/>}></Route>
                 <Route path="/home" element={<><HomeHeader/><HomeBody/></>}></Route>
              
              
            </Routes>
          </Router>


    </div>
  );
}

export default App;
