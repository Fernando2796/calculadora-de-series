import { SeriesCalculatorProps } from "../interfaces";

const SeriesCalculator = ({
  numberToCalculate,
  setResult,
}: SeriesCalculatorProps) => {
  const isPrimeNumber = (number: number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number !== 1;
  };

  const searchPrimeNumberByIndex = (number: number) => {
    let count = 0;
    let num = 1;
    while (count < number) {
      num += 1;
      if (isPrimeNumber(num)) {
        count += 1;
      }
    }

    return num;
  };

  const calculateTriangularValue = (number: number) => {
    const result = (number * (number + 1)) / 2;
    return result;
  };

  const searchFibonacciNumberByIndex = (number: number) => {
    const fibonacci = [0, 1];
    for (let index = 2; index <= number; index++) {
      fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
    }
    return fibonacci[number - 1];
  };

  const calculate = () => {
    const primeNumberResult = searchPrimeNumberByIndex(numberToCalculate);
    const triangularValueResult = calculateTriangularValue(
      numberToCalculate - 1
    );
    const fibonacciNumberResult = searchFibonacciNumberByIndex(
      numberToCalculate + 2
    );

    const serieResult =
      (4 * primeNumberResult - triangularValueResult) / fibonacciNumberResult;
    setResult(serieResult);
  };

  return calculate();
};

export default SeriesCalculator;

/**
 * 1 = 4(1) - (1 - 1) / (1 + 2) = 8 - 0 / 1 = 8
 * 2 = 4(2) - (2 - 1) / (2 + 2) = 12 - 1 / 2 = 5.5
 * 3 = 4(3) - (3 - 1) / (3 + 2) = 20 - 3 / 3 =  5.66666666667
 * 4 = 4(4) - (4 - 1) / (4 + 2) = 28 - 6 / 5 = 4.4
 * 5 = 4(5) - (5 - 1) / (5 + 2) = 44 - 10 / 8 = 4.25
 * 6 = 4(6) - (6 - 1) / (6 + 2) = 52 - 15 / 13 = 2.8461
 * 7 = 4(7) - (7 - 1) / (7 + 2) = 68 - 21 / 21 = 2.2380
 * 8 = 4(8) - (8 - 1) / (8 + 2) = 76 - 28 / 34 = 1.41176471
 * 9 = 4(9) - (9 - 1) / (9 + 2) = 92 - 36 / 55 = 1.011818182
 * 10 = 4(10) - (10 - 1) / (10 + 2) = 116 - 45 / 89 = 0.79775281
 */
