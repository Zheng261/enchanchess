/**
 * @file This timeline component is coded to start from year 2006, which is the earliest record we have
 * @author Alwyn Tan
 */

import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  position: fixed;
  top: 0%;
  right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
`;

const Date = styled.span`
  cursor: pointer;
  margin: 0;
  font-weight: 600;
  font-size: 1em;
  opacity: 0.5;
  transition: 0.2s ease;
  text-align: right;
  padding: 5px 0;
  box-sizing: border-box;

  :hover {
    transform: scale(1.2) translateX(-5px);
    opacity: 1;
  }

  :active {
    opacity: 1;
    transform: scale(1.4) translateX(-5px);
  }
`;

const activeStyle = {
  opacity: 1,
  transform: "scale(1.4) translateX(-5px)",
  fontWeight: 700,
  cursor: "default",
};

const Timeline = ({ startYear, onYearChange, setActiveYear }) => {
  const [activeYear, setActiveYearState] = useState(moment().year());

  const activeYearRef = useRef(activeYear);
  activeYearRef.current = activeYear;

  useEffect(() => {
    onYearChange(activeYearRef.current);
  }, []);

  const renderDates = () => {
    const dateComponents = [];

    for (let year = startYear; year <= moment().year() + 1; year++) {
      dateComponents.unshift(
        <Date
          key={year}
          value={year}
          style={activeYear === year ? activeStyle : {}}
          onClick={() => {
            onYearChange(year);
            setActiveYearState(year);
          }}
        >
          {year === moment().year() + 1 ? "Future" : year}
        </Date>
      );
    }

    return dateComponents;
  };

  return (
    <Container>
      <SubContainer>{renderDates()}</SubContainer>
    </Container>
  );
};

Timeline.defaultProps = {
  startYear: 2006,
  onYearChange: () => {},
  setActiveYear: () => {},
};

Timeline.propTypes = {
  startYear: PropTypes.number,
  onYearChange: PropTypes.func,
  setActiveYear: PropTypes.func,
};

export default Timeline;
