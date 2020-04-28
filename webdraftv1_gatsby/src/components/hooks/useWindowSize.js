/**
 * @file Hook to get the info of window resize events
 * @author Alwyn Tan
 * Adapted for usage in app
 */

import { useState, useEffect } from "react";

const debounce = (cb, ms) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      cb();
    }, ms);
  };
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "object") {
      return false;
    }

    const setNewWindowSizes = () => {
      setWindowSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };

    const handleResize = debounce(() => {
      setNewWindowSizes();
    }, 500);

    window.addEventListener("resize", handleResize);
    setNewWindowSizes();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
