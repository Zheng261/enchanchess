import React, { useState, useRef } from "react";
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


const CardImport = () => {
  return (
    <Page>
      <SEO title="Import Cards" />
      <TopSection>
        <TopSectionTextContainer>
          <h6>Import custom cards here!</h6>
          <h10>See [link] for guidelines on how to create and import card packs.</h10>
          <p>TODO: add file upload - csv/json</p>
        </TopSectionTextContainer>
      </TopSection>
    </Page>
  );
};

export default CardImport;
