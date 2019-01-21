import React from "react";
import spinnerIcon from "./lg.circle-dot-preloader.gif";
const spinner = props => {
  return (
    <div>
      <img src={spinnerIcon} alt="Loading..." />
    </div>
  );
};

export default spinner;
