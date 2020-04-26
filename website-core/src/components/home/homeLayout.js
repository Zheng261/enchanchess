import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Summary from "./summary";
import useWindowSize from "../hooks/useWindowSize";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  // BLACK
  background-color: #0c0c0c;
  display: grid;
  grid-template-columns: repeat(5, ${props => props.size});
  grid-template-rows: repeat(3, ${props => props.size});
  position: relative;
`;

const TitleContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkContainer = styled(({ backgroundColor, ...rest }) => (
  <Link {...rest} />
))`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  background-color: ${props => props.backgroundColor || "transparent"};
  cursor: pointer;
  transition: 0.5s ease;
  text-decoration: none;

  > p {
    margin: 0;
  }

  :hover {
    opacity: 0.7;
  }
`;

export default function HomeLayout() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const { height, width } = useWindowSize();

  let mouseMovePaused = false;

  const onMouseMove = e => {
    if (!mouseMovePaused) {
      mouseMovePaused = true;
      setTimeout(() => (mouseMovePaused = false), 100);

      const newX =
        ((e.clientX / window.innerWidth) * 0.05 - 0.05) * window.innerWidth;
      const newY =
        ((e.clientY / window.innerHeight) * 0.05 - 0.05) * window.innerHeight;

      const dX = newX - x;
      const dY = newY - y;

      // add easing by adding some friction
      setX(x + dX ? dX / 10 : 0);
      setY(y + dY ? dY / 5 : 0);
    }
  };
  return (
    <Container onMouseMove={onMouseMove}>
      <Grid
        size={height * 1.4 > width ? "30vw" : "30vh"}
        style={{
          transform: `translate(${x}px, ${y}px)`,
          boxShadow: `${-x}px ${-y}px 20px #0000002d`,
        }}
      >
        <TitleContainer>
            <Summary/>
        </TitleContainer>
       
        <div></div>
        <div></div>
       
        <LinkContainer backgroundColor="#FFFFFF7A" to="/startgame">
          <h5>Start a game!</h5>
        </LinkContainer>
        
        <LinkContainer backgroundColor="#FFFFFF38" to="/about">
          <h5>About</h5>
        </LinkContainer>

        <LinkContainer backgroundColor="#FFFFFF1C" to="/contact">
          <h5>Contact</h5>
        </LinkContainer>
      </Grid>
    </Container>
  );
}
