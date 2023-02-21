/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/userSlice';

const BodyLeft = () => {
  const user = useSelector(userSelector);
  return (
    <Container>
      <UpperLeftCard>
        <CardBg></CardBg>
        <CardPic>
          <img src={user?.photoURL} alt="" />
        </CardPic>
        <CardTitle>
          <a>
            <span>{user?.displayName}</span>
          </a>
        </CardTitle>
        <hr />
        <CardConnection>
          <div>
            <a>
              <span>Connections</span>
              <span>Grow your network</span>
            </a>
          </div>
          <a>
            <img src="./images/widget-icon.svg" alt="" />
          </a>
        </CardConnection>
        <hr />
        <CardItem>
          <a>
            <img src="./images/item-icon.svg" alt="" />
            <span>My items</span>
          </a>
        </CardItem>


      </UpperLeftCard>

      <LowerLeftCard>

      <CardGroup>
            <a>
                <span>Groups</span>
            </a>
            <a>
                <span>Events</span>
                <img src="./images/plus-icon.svg" alt="" />
            </a>
            <a>
                <span>
                    Followed Hashtags
                </span>
            </a>
        </CardGroup>
        <hr />
        <Discover>
            <span>Discover More</span>
        </Discover>
      </LowerLeftCard>
    </Container>
  );
};

export default BodyLeft;

const Container = styled.div`
  width: 20vw;

  hr{
    opacity: 0.5;

  }



  @media (max-width: 768px) {
    width: 95vw;
  }
`;

const UpperLeftCard = styled.div`
    background: white;
    border-radius: 10px;


`;


const CardBg = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  background-image: url("./images/card-bg.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CardPic = styled.div`
  position: absolute;
  left: 20%;
  img{
    width: 55px;
    height: 55px;
    z-index: 1;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid white;
    margin: -38px auto 12px;

  }

`;

const CardTitle = styled.div`
  text-align: center;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  height:40px;
  margin-top: 50px;

`;

const CardConnection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;

  &:hover{
            background-color: rgba(0,0,0,0.1);
            cursor: pointer;
        }

  & > div > a {
    display: flex;
    gap: 3px;
    flex-direction: column;

    span {
      font-size: 14px;
      letter-spacing: 0.5px;

      &:first-child {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;

const CardItem = styled.div`

&:hover{
            background-color: rgba(0,0,0,0.1);
            cursor: pointer;
        }
    a{
        display: flex;
        align-items: center;
        gap:5px;
        padding:12px 6px;
        margin-bottom: 5px;
    }
`;

const LowerLeftCard = styled.div`

        margin-top: 10px;
        background: white;
        border-radius: 10px;
`

const CardGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap:18px;
    font-size: 14px;
    font-weight: 600;
    color: #378fe9;
    padding: 10px 10px;

    a{
        &:nth-child(2){
            display: flex;
            justify-content: space-between;

        }
    }

`;


const Discover = styled.div`
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            background-color: rgba(0,0,0,0.1);
            cursor: pointer;
        }
    span{
        color: rgba(0,0,0,0.6);
        font-weight: 600;



    }
`

