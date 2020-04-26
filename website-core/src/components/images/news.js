/**
 * @file Exports the news image as a component
 * @author Alwyn Tan
 */

import React, { useEffect } from "react";
import NEWS_LOGO from "../../images/news.svg";

export default ({ style }) => {
  useEffect(() => {
    new Image().src = NEWS_LOGO;
  }, []);

  return <img alt="News Logo" style={style} src={NEWS_LOGO} />;
};
