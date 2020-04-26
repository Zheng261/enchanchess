/**
 * @file The home page container
 * @author Alwyn Tan
 */

// Todo: if possible, use translateY again, (until chrome fix the drawing for grid to be nice?)
import React from "react";
import { motion } from "framer-motion";
import { PAGE_TRANSITION_PRESET } from "../constants";
import styled from "styled-components";

import SEO from "../components/seo";
import useWindowSize from "../components/hooks/useWindowSize";
import HomeLayout from "../components/home/homeLayout";
import HomeLayoutMobile from "../components/home/homeLayoutMobile";

const Container = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const IndexPage = () => {
  const { width } = useWindowSize();

  const renderBySize = () => {
    if (!width) {
      return <></>;
    }

    if (width <= 480) {
      return <HomeLayoutMobile />;
    } else {
      return <HomeLayout />;
    }
  };

  return (
    <Container
      key="index_grid"
      initial={{ top: "-100%" }}
      animate={{ top: "0%" }}
      transition={PAGE_TRANSITION_PRESET}
      exit={{ top: "-100%" }}
    >
      <SEO title="Cards Against Humanity Online - Home" />
      {renderBySize()}
    </Container>
  );
};

export default IndexPage;
