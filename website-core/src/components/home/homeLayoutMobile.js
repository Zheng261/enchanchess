import React from "react";
import styled from "styled-components";

import SummaryMobile from "./summaryMobile";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #8d0707;
  color: white;
  padding: 0 40px;
`;

const HomeLayoutMobile = () => {
  return (
    <Container>
        <SummaryMobile/>
    </Container>
  );
};

HomeLayoutMobile.propTypes = {};

export default HomeLayoutMobile;
