// Rule: Each Page must have a motion attached to it

import "./src/global.css";
import React from "react";
import RootContainer from "./src/components/rootContainer";

export const wrapPageElement = ({ element }) => {
  return <RootContainer>{element}</RootContainer>;
};
