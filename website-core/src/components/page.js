/**
 * @file Component for a typical page layout, like About, Cosponsorships, and mailing
 * @author Alwyn Tan
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import { THEME_RED, PAGE_TRANSITION_PRESET } from "../constants";
import { motion } from "framer-motion";

import Footer from "./footer";
import useWindowSize from "./hooks/useWindowSize";

const Container = styled(motion.div)`
  background-color: #f6f6f6;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: absolute;

  a,
  h6 {
    color: ${THEME_RED};
    margin-bottom: 5px;
  }

  p {
    white-space: pre-line;
  }
`;

const ScrollContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`;

const LeftPadding = styled.div`
  min-width: 130px;
  display: flex;
  justify-content: center;

  > div {
    position: fixed;
  }

  /* phone styles */
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  margin: 65px 0px 125px 0px;
  flex-grow: 1;

  /* phone styles */
  @media screen and (max-width: 480px) {
    margin: 65px 30px 125px 30px;
  }
`;

const ChildrenContainer = styled.div`
  flex-grow: 1;
`;

const Page = ({ hideHomeButton, children, style }) => {
  const { width } = useWindowSize();

  return (
    <Container
      key="page"
      initial={{ top: "100%" }}
      animate={{ top: "0%" }}
      transition={PAGE_TRANSITION_PRESET}
      exit={{ top: "100%" }}
      style={style}
    >
      <ScrollContainer>
        <Content>
          <LeftPadding>
            <div>
              {!hideHomeButton && (
                <Link to="/" style={{ height: 100 }}>
                  <button>Back</button>
                </Link>
              )}
            </div>
          </LeftPadding>
      
        
          <ChildrenContainer>{children}</ChildrenContainer>
        </Content>
        <Footer></Footer>
       
      </ScrollContainer>
    </Container>
  );
};

Page.propTypes = {
  hideHomeButton: PropTypes.bool,
  style: PropTypes.object,
};

export default Page;
