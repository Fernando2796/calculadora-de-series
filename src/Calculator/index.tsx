"use client";

import { useState } from "react";
import { NumericInput } from "./NumberInput";
import { NumberOutput } from "./NumberOutput";
import SeriesCalculator from "./SeriesCalculator";
import "./styles.css";
import { ErrorMessage } from "./ErrorMessage";
export default function Calculator() {
  const [valueToCalculate, setValueToCalculate] = useState<number | null>(null);

  const [resultCalculatedValue, setResultCalculatedValue] = useState<
    null | number
  >(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <div className="main">
      <NumericInput
        setValue={setValueToCalculate}
        numberToCalculate={valueToCalculate}
        setResult={setResultCalculatedValue}
        setErrorMessage={setErrorMessage}
      />
      {resultCalculatedValue && <NumberOutput result={resultCalculatedValue} />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}
