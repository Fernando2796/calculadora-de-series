import { Button, Card, CardBody, Input } from "@nextui-org/react";
import React from "react";
import { NumberInputProps } from "../interfaces";
import SeriesCalculator from "../SeriesCalculator";

export const NumericInput = ({
  numberToCalculate,
  setValue,
  setResult,
  setErrorMessage,
}: NumberInputProps) => {
  const calculateValue = () => {
    if (!numberToCalculate) {
      setErrorMessage("Por favor ingrese un numero válido");
      setResult(null);
      return;
    }

    if (numberToCalculate) {
      setErrorMessage(null);
      SeriesCalculator({ numberToCalculate, setResult });
    }
  };

  return (
    <Card className="w-3/6">
      <CardBody className="gap-4 justify-center">
        <h1>Calculadora</h1>
        <Input
          type="number"
          variant={"bordered"}
          label="Ingrese su número"
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <Button onClick={() => calculateValue()}>Calcular</Button>
      </CardBody>
    </Card>
  );
};
