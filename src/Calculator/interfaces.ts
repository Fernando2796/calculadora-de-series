import { Dispatch, SetStateAction } from "react";

export interface SeriesCalculatorProps {
    numberToCalculate: number;
    setResult: Dispatch<SetStateAction<number | null>>
}

export interface NumberInputProps {
    numberToCalculate: number | null;
    setValue: Dispatch<SetStateAction<number | null>>
    setResult: Dispatch<SetStateAction<number | null>>
    setErrorMessage: Dispatch<SetStateAction<string | null>>
}

export interface NumberOutputProps {
    result: number;
}

export interface ErrorMesaggeProps {
    message: string;
}