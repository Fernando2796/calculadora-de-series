import { Card, CardBody } from "@nextui-org/react";
import { NumberOutputProps } from "../interfaces";

export const NumberOutput = ({ result }: NumberOutputProps) => {
  return (
    <Card>
      <CardBody>
        <p>Resultado: {result}</p>
      </CardBody>
    </Card>
  );
};
