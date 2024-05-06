import SeriesCalculator from "@/Calculator/SeriesCalculator";
import "@testing-library/jest-dom";

describe("SeriesCalculator", () => {
  it("Test with the number 1", () => {
    const numberToCalculate = 1;
    const setResultMock = jest.fn();
    SeriesCalculator({ numberToCalculate, setResult: setResultMock });
    expect(setResultMock).toHaveBeenCalledWith(8);
  });

  it("Test with the number 2", () => {
    const numberToCalculate = 2;
    const setResultMock = jest.fn();
    SeriesCalculator({ numberToCalculate, setResult: setResultMock });
    expect(setResultMock).toHaveBeenCalledWith(5.5);
  });

  it("Test with the number 3", () => {
    const numberToCalculate = 3;
    const setResultMock = jest.fn();
    SeriesCalculator({ numberToCalculate, setResult: setResultMock });
    expect(setResultMock).toHaveBeenCalledWith(5.666666666666667);
  });

  it("Test with the number 4", () => {
    const numberToCalculate = 4;
    const setResultMock = jest.fn();
    SeriesCalculator({ numberToCalculate, setResult: setResultMock });
    expect(setResultMock).toHaveBeenCalledWith(4.4);
  });

  it("Test with the number 5", () => {
    const numberToCalculate = 5;
    const setResultMock = jest.fn();
    SeriesCalculator({ numberToCalculate, setResult: setResultMock });
    expect(setResultMock).toHaveBeenCalledWith(4.25);
  });

  it("Test with the number 6", () => {
    const numberToCalculate = 6;
    const setResultMock = jest.fn();
    SeriesCalculator({ numberToCalculate, setResult: setResultMock });
    expect(setResultMock).toHaveBeenCalledWith(2.8461538461538463);
  });

  it("Test with the number 7", () => {
    const numberToCalculate = 7;
    const setResultMock = jest.fn();
    SeriesCalculator({ numberToCalculate, setResult: setResultMock });
    expect(setResultMock).toHaveBeenCalledWith(2.238095238095238);
  });

  it("Test with the number 8", () => {
    const numberToCalculate = 8;
    const setResultMock = jest.fn();
    SeriesCalculator({ numberToCalculate, setResult: setResultMock });
    expect(setResultMock).toHaveBeenCalledWith(1.411764705882353);
  });

  it("Test with the number 9", () => {
    const numberToCalculate = 9;
    const setResultMock = jest.fn();
    SeriesCalculator({ numberToCalculate, setResult: setResultMock });
    expect(setResultMock).toHaveBeenCalledWith(1.018181818181818);
  });

  it("Test with the number 10", () => {
    const numberToCalculate = 10;
    const setResultMock = jest.fn();
    SeriesCalculator({ numberToCalculate, setResult: setResultMock });
    expect(setResultMock).toHaveBeenCalledWith(0.797752808988764);
  });
});
