import React from "react";

import applyConfigProps from "./Props";

import "../Button/Button.css"

/**
 * Renders Button component
 * 
 * @param  {Object} props 
 * @param  {String} props.text - Button text.
 * @param  {String} props.type - Button type by className.
 * @param  {Function} props.clickHandler - Callback action click.
 * 
*/
const button = ({ text, type, clickHandler }) => (
  <button className={type} onClick={() => clickHandler(text)}>
    <span>{text}</span>
  </button>
);

applyConfigProps(button);

export default button;
