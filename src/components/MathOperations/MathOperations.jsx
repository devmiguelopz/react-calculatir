import React from "react";

import Button from "../Button/Button";

import applyConfigProps from "./Props";

/**
 * Renders MathOperation component
 *
 * @param  {Object} props
 * @param  {Function} props.onClickOperation - Callback click button operation.
 * @param  {Function} props.onclickEqual - Callback click button equal.
 *
 */
const mathOperations = ({ onClickOperation, onclickEqual }) => (
  <section className="math-operations">
    <Button text="+" clickHandler={onClickOperation}></Button>
    <Button text="-" clickHandler={onClickOperation}></Button>
    <Button text="*" clickHandler={onClickOperation}></Button>
    <Button text="/" clickHandler={onClickOperation}></Button>
    <Button text="=" clickHandler={onclickEqual}></Button>
  </section>
);

applyConfigProps(mathOperations);

export default mathOperations;
