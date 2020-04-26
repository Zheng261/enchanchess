/**
 * @file Exports the ssb_logo_large as an image component
 * @author Alwyn Tan
 */

import React, { useEffect } from "react";
import SSB_LOGO_LARGE from "../../images/ssb_logo_large.svg";

export default ({ style }) => {
  useEffect(() => {
    new Image().src = SSB_LOGO_LARGE;
  }, []);

  return (
    <img
      alt="Stanford Speakers Bureau"
      style={{ height: "100%", width: "100%", margin: 0, ...style }}
      src={SSB_LOGO_LARGE}
    />
  );
};
