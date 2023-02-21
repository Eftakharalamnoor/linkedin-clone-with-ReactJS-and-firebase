/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

const BodyRight = () => {
  return (
    <Container>
      <Title>
        <span>Add to your feed</span>
        <img src="./images/feed-icon.svg" alt="" />
      </Title>
      <PeopleFollow>
        <div className="PeopleFollowImg">
          <img src="./images/people-profile.jpeg" alt="" />
        </div>
        <div className="PeopleFollowInfo">
          <span>Farhana Preeti</span>
          <span>CO-Founder, AjkerDeal/Delivery</span>
          <span>Tiger/Bdjobs.com</span>
          <button>
            <a>
              <img src="./images/plus-icon.svg" alt="" />
              <span>Follow</span>
            </a>
          </button>
        </div>
      </PeopleFollow>

      <PeopleFollow>
        <div className="PeopleFollowImg">
          <img src="./images/people-profile.jpeg" alt="" />
        </div>
        <div className="PeopleFollowInfo">
          <span>Farhana Preeti</span>
          <span>CO-Founder, AjkerDeal/Delivery</span>
          <span>Tiger/Bdjobs.com</span>
          <button>
            <a>
              <img src="./images/plus-icon.svg" alt="" />
              <span>Follow</span>
            </a>
          </button>
        </div>
      </PeopleFollow>

      <PeopleFollow>
        <div className="PeopleFollowImg">
          <img src="./images/people-profile.jpeg" alt="" />
        </div>
        <div className="PeopleFollowInfo">
          <span>Farhana Preeti</span>
          <span>CO-Founder, AjkerDeal/Delivery</span>
          <span>Tiger/Bdjobs.com</span>
          <button>
            <a>
              <img src="./images/plus-icon.svg" alt="" />
              <span>Follow</span>
            </a>
          </button>
        </div>
      </PeopleFollow>
    </Container>
  );
};

export default BodyRight;

const Container = styled.div`
  width: 27vw;
  background: white;

  @media (max-width: 768px) {
    width: 95vw;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.9);
`;

const PeopleFollow = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px 10px;

  .PeopleFollowImg {
    img {
      width: 50px;
      height: 50px;
      border-radius: 24px;
    }
  }

  .PeopleFollowInfo {
    display: flex;
    gap: 5px;
    flex-direction: column;

    span {
      font-size: 14px;

      &:nth-child(2) {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.5);
      }
      &:nth-child(3) {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.5);
      }
    }

    button {
      width: 100px;
      border-radius: 24px;
      padding: 5px 10px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-right: 5px;
      }
    }

    button > a > span {
      font-size: 16px !important;
      color: rgba(0, 0, 0, 0.8) !important;
    }
  }
`;
