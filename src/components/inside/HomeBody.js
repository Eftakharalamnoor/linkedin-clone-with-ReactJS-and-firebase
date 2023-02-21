import React from "react";
import styled from "styled-components";
import BodyLeft from "./BodyLeft";
import BodyMain from "./BodyMain";
import BodyRight from "./BodyRight";

const HomeBody = () => {
  return (
    <Container>
      <BodyLeft />
      <BodyMain />
      <BodyRight />
    </Container>
  );
};

export default HomeBody;

const Container = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95vw;
    flex-direction: column;
  }
`;
