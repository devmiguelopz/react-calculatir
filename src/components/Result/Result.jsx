import React from "react";

import applyConfigProps from "./Props";

/**
 * Renders Result component
 * 
 * @param  {Object} props 
 * @param  {Number} props.value - Result text.
 * 
*/
const result = ({ value }) => (
  <div className="result">
    <span>{value}</span>
  </div>
);

applyConfigProps(result);

export default result;
