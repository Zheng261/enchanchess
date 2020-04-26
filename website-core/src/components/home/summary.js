import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
  text-align: center;
`;

const Strong = styled.strong`
  font-weight: 800;
  font-size: 170%;
`;

const Summary = () => {
  return (
    <Container>
      <p>
      <h3>
         <Strong>Cards Against Humanity,  a party game for horrible people</Strong>
      </h3>
      <h3>
         (Social distancing edition)
      </h3>
      </p>
      
      <br/>
      
    </Container>
  );
};

export default Summary;
