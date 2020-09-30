/* eslint no-eval: 0 */
// #region Internal Modules
import React, { useState } from "react";
import words from "lodash.words";
// #endregion
// #region Import Components
import Functions from "./components/Functions/Functions";
import MathOperations from "./components/MathOperations/MathOperations";
import Numbers from "./components/Numbers/Numbers";
import Result from "./components/Result/Result";
// #endregion
// #region Style
import "./App.css";
// #endregion

const App = () => {
  const hookResult = useState("");
  const [valueResult, setValueResult] = hookResult;
  const objHook = {
    Value: valueResult,
    SetValueResult: setValueResult,
  };
  const currentValueResult = words(valueResult,/[^-^+^*^/]+/g);
  const currentResult = currentValueResult[(currentValueResult.length || 1) -1];
  return (
    <main className="react-calculator">
      <Result value={currentResult}></Result>

      <Numbers
        onClickNumber={(operatorNumber) =>
          OnClickNumber(objHook, operatorNumber)
        }
      ></Numbers>

      <Functions
        onContentClear={() => onContentClear(objHook)}
        onDelete={() => onDelete(objHook)}
      ></Functions>

      <MathOperations
        onClickOperation={(operation) => onClickOperation(objHook, operation)}
        onclickEqual={() => onClickEqual(objHook)}
      ></MathOperations>
    </main>
  );
};

/**
 * Logic on click number
 *
 * @param  {Object} objHook
 * @param  {String} objHook.Value
 * @param  {Function} objHook.SetValueResult
 * @param  {String} valueClient
 *
 */
const OnClickNumber = (objHook, valueClient) => {
  objHook.SetValueResult(`${objHook.Value}${valueClient}`);
};

/**
 * Logic on click clear
 *
 * @param  {Object} objHook
 * @param  {String} objHook.Value
 * @param  {Function} objHook.SetValueResult
 *
 */
const onContentClear = (objHook) => {
  objHook.SetValueResult("");
};

/**
 * Logic on click delete
 *
 * @param  {Object} objHook
 * @param  {String} objHook.Value
 * @param  {Function} objHook.SetValueResult
 *
 */
const onDelete = (objHook) => {
  const newValue = objHook.Value.substring(0, (objHook.Value.length || 1) - 1);
  objHook.SetValueResult(newValue);
};

/**
 * Logic on click operation
 *
 * @param  {Object} objHook
 * @param  {String} objHook.Value
 * @param  {Function} objHook.SetValueResult
 * @param  {String} valueClient
 *
 */
const onClickOperation = (objHook, valueClient) => {
  objHook.SetValueResult(`${objHook.Value}${valueClient}`);
};

/**
 * Logic on click equal
 *
 * @param  {Object} objHook
 * @param  {String} objHook.Value
 * @param  {Function} objHook.SetValueResult
 *
 */
const onClickEqual = (objHook) => {
  objHook.SetValueResult(eval(objHook.Value));
};

export default App;
