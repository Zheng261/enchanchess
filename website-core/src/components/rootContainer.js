/**
 * @file Wrapper for every component (used only in gatsby browser and gatsby ssr)
 * @author Alwyn Tan
 */

// Rule: Each Page must have a motion attached to it

import "../global.css";
import React from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import useWindowSize from "./hooks/useWindowSize";
import CAHicon from "./images/CAHicon";

const Container = styled.div`
  height: ${props => props.height + "px" || "100vh"};
  width: 100vw;
`;

const BackgroundImageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.div`
  width: 20%;
  max-width: 150px;
`;

export default ({ children }) => {
  const { height } = useWindowSize();

  return (
    <Container height={height}>
      <BackgroundImageContainer>
        <BackgroundImage>
          <CAHicon/>
        </BackgroundImage>
      </BackgroundImageContainer>
      <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
    </Container>
  );
};
