import React, { useState } from "react";

export function DateOfBirth() {
  const [year, setYear] = useState<string>("");
  const [isLeapYear, setIsLeapYear] = useState<boolean | null>(null);

  const checkLeapYear = (yearNum: number): boolean => {
    return (yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setYear(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const num = Number(year);

    if (!year || isNaN(num)) {
      setIsLeapYear(null);
      return;
    }

    setIsLeapYear(checkLeapYear(num));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="number"
            placeholder="Введіть рік народження"
            value={year}
            onChange={handleChange}
          />
          <button type="submit">Перевірити</button>
        </label>
      </form>

      {isLeapYear === true && <p>Ви народилися у високосний рік!</p>}

      {isLeapYear === false && <p>Ви народилися не у високосний рік!</p>}
    </div>
  );
}
