/**
 * @file Contact page, mailing list and contact us form
 * 
 */

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


const Contact = () => {
  return (
    <Page>
      <SEO title="GGEZ - Contact Us" />
      <TopSection>
        <TopSectionTextContainer>
          <h6>Suggestions? Let us know below.</h6>
          <p>(input field maybe idk)</p>
        </TopSectionTextContainer>
      </TopSection>
    </Page>
  );
};

export default Contact;
