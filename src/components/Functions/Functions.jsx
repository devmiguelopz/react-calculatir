import React from "react";

import Button from "../Button/Button";

import applyConfigProps from "./Props";

/**
 * Renders Functions component
 *
 * @param  {Object} props
 * @param  {Function} props.onContentClear - Callback click button clear.
 * @param  {Function} props.onDelete - Callback click button delete.
 *
 */
const functions = ({ onContentClear, onDelete }) => (
  <section className="functions">
    <Button type="button-long-text" text="Clear" clickHandler={onContentClear}></Button>
    <Button type="" text="Remove" clickHandler={onDelete}></Button>
  </section>
);

applyConfigProps(functions);

export default functions;
