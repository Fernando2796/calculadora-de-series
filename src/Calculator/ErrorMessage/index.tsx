import { Card, CardBody } from "@nextui-org/react";
import { ErrorMesaggeProps } from "../interfaces";

export const ErrorMessage = ({ message }: ErrorMesaggeProps) => {
  return (
    <Card>
      <CardBody>
        <p> {message} </p>
      </CardBody>
    </Card>
  );
};
