/**
 * @file About Page
 * @author Alwyn Tan
 */

import React from "react";
import styled from "styled-components";
import Page from "../components/page";
import Content from "../pages_content/about";
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



const About = () => {
  return (
    <Page>
      <SEO title="Stanford Speakers Bureau - About Us" />
      <TopSection>
        <TopSectionTextContainer>
          <h6>{Content.whoWeAre}</h6>
          <p style={{ marginBottom: 30 }}>{Content.whoWeAreContent}</p>
          <h6>{Content.ourMission}</h6>
          <p>{Content.ourMissionContent}</p>
        </TopSectionTextContainer>
      </TopSection>
    </Page>
  );
};

About.propTypes = {};

export default About;
