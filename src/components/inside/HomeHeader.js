import React from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/userSlice';
import { Navigate } from "react-router";
import firebase from 'firebase';



const HomeHeader = () => {
  const user = useSelector(userSelector);
  return (
    <Container>
      {
        !user && <Navigate to='/'/>
      }
      <Logo>
        <img src="./images/mini-logo.png" alt="" />
      </Logo>
      <Search>
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <SearchIcon>
          <i className="fa-solid fa-magnifying-glass"></i>
        </SearchIcon>
      </Search>

      <Nav>
        <NavlistWrap>
          <Navlist>
            <a href="/#">
              <img src="./images/nav-home.svg" alt="" />
              <span>Home</span>
            </a>
          </Navlist>
          <Navlist>
            <a href="/#">
              <img src="./images/nav-network.svg" alt="" />
              <span>My Network</span>
            </a>
          </Navlist>
          <Navlist>
            <a href="/#">
              <img src="./images/nav-jobs.svg" alt="" />
              <span>Jobs</span>
            </a>
          </Navlist>
          <Navlist>
            <a href="/#">
              <img src="./images/nav-messaging.svg" alt="" />
              <span>Message</span>
            </a>
          </Navlist>
          <Navlist>
            <a href="/#">
              <img src="./images/nav-notifications.svg" alt="" />
              <span>Notifications</span>
            </a>
          </Navlist>

          <User>
            <a href="/#">
              <img src={user?.photoURL} alt="" />
              <span>Me</span>
            </a>

            <SignOut onClick={(e)=>{
              firebase.auth().signOut();
            }}>Sign Out</SignOut>
          </User>

          <Work>
            <a href="/#">
              <img src="./images/nav-work.svg" alt="" />
              <span>
                Work
                <img src="./images/down-icon.svg" alt="" />
              </span>
            </a>
          </Work>
        </NavlistWrap>
      </Nav>
    </Container>
  );
};

export default HomeHeader;

const Container = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  background: White;
  margin-bottom:26px;
`;

const Logo = styled.div`
  width: 35px;
  margin-right: 7px;

  img {
    width: 100%;
  }
`;

const Search = styled.div`
  position: relative;

  & > div {
    max-width: 350px;

    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      color: rgba(0, 0, 0, 0.9);
      border-radius: 3px;
      line-height: 1.75;
      width: 300px;
      padding: 0px 8px 0px 40px;
      font-size: 14px;
      font-weight: 400;
      height: 34px;
      border-color: #dcef61;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  z-index: 1;
  width: 40px;
  top: 10px;
  left: 2px;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
`;

const NavlistWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
`;

const Navlist = styled.li`
  display: flex;
  align-items: center;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    color: black;
  }

  span {
    color: rgba(0, 0, 0, 0.6);
  }
`;

const SignOut = styled.div`
  cursor: pointer;
  position: absolute;
  top: 60px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  height: 45px;
  display: none;
`;

const User = styled(Navlist)`
  a > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
