import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, userSelector } from '../../../store/userSlice';
import { Navigate } from "react-router";
import { auth } from "../../../firebase";


const Header = () => {

  const user = useSelector(userSelector);

  const [signUp, setSignUpFunc] = useState(false);

  //signUp Form State
  const [firstName, setfirstNameFunc] = useState("");
  const [lastName, setlastNameFunc] = useState("");
  const [email, setemailFunc] = useState("");
  const [photoURL, setphotoURLFunc] = useState("");
  const [password, setpasswordFunc] = useState("");

 const dispatch = useDispatch();


  const signUpFunc = (e) =>{
    e.preventDefault();


    if(!firstName){
      alert("First Name is required");
   }else if(!lastName){
    alert("Last Name is required");
   }
   else if(!photoURL){
    alert("Profile Picture URL is required");
   } else if(!email){
    alert("Email is required");
   }
   else if(!password){
    alert("Password is required");
   }

   auth.createUserWithEmailAndPassword(email,password).then((userAuth) =>{
     userAuth.user.updateProfile({
      displayName: `${firstName} ${lastName}`,
       photoURL: photoURL
     }).then(() =>{
        dispatch(loginUser({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          photoURL: userAuth.user.photoURL,
          displayName: userAuth.user.displayName,
          
        }))
     })
   }).catch((error) => {
    alert(error);
   })

   setfirstNameFunc("");
   setlastNameFunc("");
   setphotoURLFunc("");
   setpasswordFunc("");


  }


  const LoginFunc = (e) =>{
    e.preventDefault();

    if(!email){
      alert("Email is required");
     }
     else if(!password){
      alert("Password is required");
     }

     auth.signInWithEmailAndPassword(email,password).then(({user})=>{

      dispatch(loginUser({
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
      }))

     }).catch((error) => {
      alert(error);
     })
  }

  return (
    <>
    <Container>

      {
        user && <Navigate to='/home'/>
      }
      <Navbar>
        <div className="right-side">
          <img src="./images/logo.png" alt="" />
        </div>

        <div className="left-side">
          <h2>join now</h2>
          <a href="/#">Sign in</a>
        </div>
      </Navbar>

      

        {
          signUp===true ? (<SignUp>
            <h1>Sign Up Your Account</h1>
            <form onSubmit={signUpFunc}>
                <input type="text"  placeholder="First Name" value={firstName} onChange={e=>setfirstNameFunc(e.target.value)}/>
                <input type="text"  placeholder="Last Name" value={lastName} onChange={e=>setlastNameFunc(e.target.value)}/>
                <input type="text"  placeholder="Profile Picture URL" value={photoURL} onChange={e=>setphotoURLFunc(e.target.value)}/>
                <input type="email"  placeholder="Email" value={email} onChange={e=>setemailFunc(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={e=>setpasswordFunc(e.target.value)}/>
                <input type="submit" value="Sign Up" />
                <h4>Already a Member? <span onClick={e=>setSignUpFunc(false)}>Login Here</span></h4>
            </form>
          </SignUp>) :
           (<Login>
            <h1>Welcome to your professional community</h1>
            <form onSubmit={LoginFunc}>
                <input type="text"  placeholder="Email or Phone number" value={email} onChange={e=>setemailFunc(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={e=>setpasswordFunc(e.target.value)}/>
                <a href="/#">Forgot Password?</a>
                <input type="submit" value="Sign in" />
                <h4>Not a Member? <span onClick={e=>setSignUpFunc(true)}>Register Here</span></h4>
                <p>or</p>
                <Google>
                <img src="./images/google.png" alt="" />
                <button>Sign in with Google</button>
                </Google>
            </form>
          </Login>)
        }
      

    </Container>
    </>
  );
};



const Container = styled.div`
  width: 70vw;
  margin: 0 auto;
  margin-bottom: 100px;


  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Navbar = styled.nav`
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 3rem;

  .right-side {
    width: 13%;

    @media (max-width: 768px){
        width: 20%;
    }
    img {
      width: 100%;
      height: auto;
    }


  }

  .left-side {
    width: 87%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    h2{
        color: rgba(0, 0, 0, 0.75);
        font-size: 1rem;
        margin-right:30px;
        letter-spacing:1px;
    }

    a{
        color: #0a66c2;
        font-weight: 500;
        font-size: 1.1rem;
        border: 1px solid #0a66c2;
        border-radius: 24px;
        padding: 0.7rem 1.4rem ;

    }
  }
`;


const Login = styled.div`

    display: flex;
    flex-direction: column;
    width: 60%;

    @media (max-width:768px){
            width: 95%;
            margin: 0 auto;
        }


    h1{
        font-size:3rem;
        font-weight: 200;
        margin-bottom: 2rem;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 65%;
        gap:1rem;

        @media (max-width:768px){
            width: 100%;
        }



        input{
            padding:14px;

            &:focus{
                outline-color: #2977c9;
            }
        }
        input[type=submit]{
            border-radius: 24px;
            border:none;

            color:white;
            font-size: 1.2rem;
            background: #2977c9;

            &:hover{
                background: #0073b1;
            }


        }
    }

    Google{
        color:black;
        position: relative;

        img{
            width: 20px;
            position: absolute;
            top: 17px;
            left: 90px;

        }

        button{
            width:100%;
            border-radius: 24px;
            border:1px solid black;
            padding:14px;
            color:black;
            font-size: 1.2rem;
            background: white;
        }
    }

    p{
        text-align: center;
    }

    span{
      cursor: pointer;
    }
`

const SignUp = styled(Login)`


`


const Google = styled.div`
color:black;
        position: relative;

        img{
            width: 20px;
            position: absolute;
            top: 17px;
            left: 90px;

        }

        button{
            width:100%;
            border-radius: 24px;
            border:1px solid black;
            padding:14px;
            color:black;
            font-size: 1.2rem;
            background: white;
        }
`




export default Header;
