/**
 * @file Footer used in all the typical pages
 * @author Alwyn Tan
 */

import React from "react";

import styled from "styled-components";
//import FacebookLogo from "../components/images/facebook";
//import InstagramLogo from "../components/images/instagram";
//import LinkedInLogo from "../components/images/linkedin";
//import NewsLogo from "../components/images/news";

import { THEME_BLACK } from "../constants";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 100vw;

  > p {
    color: ${THEME_BLACK};
    margin: 20px 0;
    text-align: center;
  }

  /* phone styles */
  @media screen and (max-width: 480px) {
    padding: 0 5px;
  }
`;

const RedBox = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${THEME_BLACK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  > p {
    font-weight: 800;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  margin-top: 15px;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 12px;
    height: 24px;
    width: 24px;
  }

  img {
    filter: invert(100%);
  }
`;

const Footer = () => {
  //const linkOptions = {
  //  target: "_blank",
  // rel: "noopener noreferrer",
  //};
  return (
    <Container>
      <RedBox>
        <p>Follow Us On</p>
        <LogoContainer>
          <p>Stuff</p>
        </LogoContainer>
      </RedBox>
    </Container>
  );
};

export default Footer;
