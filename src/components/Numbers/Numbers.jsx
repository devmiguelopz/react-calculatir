import React from "react";

import applyConfigProps from "./Props";

import Button from "../Button/Button";

const renderButton = onClickNumber => {
  const listNumberCalculator = [1,2,3,4,5,6,7,8,9,0];
  return listNumberCalculator.map(value => <Button key={value} text={value.toString()} clickHandler={onClickNumber}></Button>);
}

/**
 * Renders Numbers component
 *
 * @param  {Object} props
 * @param  {Function} props.onClickNumber - Callback action click.
 *
 */
const numbers = ({ onClickNumber }) => (
  <section className="numbers">
    {renderButton(onClickNumber)}
  </section>
);

applyConfigProps(numbers);

export default numbers;
