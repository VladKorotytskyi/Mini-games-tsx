import React, { useState } from "react";

export const Calculator = () => {
  const [numOne, setNumOne] = useState<string>("");
  const [numTwo, setNumTwo] = useState<string>("");
  const [result, setResult] = useState<number | string>(0);

  const handleChangeNumOne = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setNumOne(e.target.value);
  const handleChangeNumTwo = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setNumTwo(e.target.value);

  const handlePlus = (): void => setResult(Number(numOne) + Number(numTwo));
  const handleMinus = (): void => setResult(Number(numOne) - Number(numTwo));
  const handleMul = (): void => setResult(Number(numOne) * Number(numTwo));
  const handleDiv = (): void => {
    if (Number(numTwo) === 0) {
      alert("Cannot be divided by 0");
      setResult("Error");
    } else {
      setResult(Number(numOne) / Number(numTwo));
    }
  };

  return (
    <div id="calculator">
      <h1>Calculator</h1>
      <input
        type="text"
        value={numOne}
        placeholder="Enter first number"
        onChange={handleChangeNumOne}
      />
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleMul}>x</button>
      <button onClick={handleDiv}>/</button>
      <input
        type="text"
        value={numTwo}
        placeholder="Enter second number"
        onChange={handleChangeNumTwo}
      />

      <p>Result: {result}</p>
    </div>
  );
};
