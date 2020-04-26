/**
 * @file Page For starting game
 */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Page from "../components/page";
import SEO from "../components/seo";

const TopSection = styled.section`
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;

  /* phone styles */
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const TopSectionTextContainer = styled.div`
  max-width: 700px;
  margin-right: 80px;

  /* phone styles */
  @media screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 45px;
  }
`;



const StartGame = () => {
  return (
    <Page>
      <SEO title="Cards Against Humanity Online -- Start a game" />
      <TopSection>
        <TopSectionTextContainer>
          <h6>Start a game now! Copy a link and send it to your friends</h6>
          <h6>[link here]</h6>
        </TopSectionTextContainer>
      </TopSection>
    </Page>
  );
};


export default StartGame;
