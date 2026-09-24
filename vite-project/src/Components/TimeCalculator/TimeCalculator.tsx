import React, { useState } from "react";

export function TimeCalculator() {
  const [inputValue, setInputValue] = useState<string>("");
  const [output, setOutput] = useState<string>("3 дн. 15:45:01");
  const [opacity, setOpacity] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = inputValue.trim();
    const totalMinutes = parseInt(value, 10);

    if (value === "" || isNaN(totalMinutes) || totalMinutes < 0) {
      setOpacity(0);
      setTimeout(() => {
        setOutput("Введіть додатне число");
        setOpacity(1);
      }, 300);
      return;
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    let timeString = "";

    if (hours > 0) {
      timeString += `${hours} ${hours === 1 ? "година" : "годин"} `;
    }
    if (minutes > 0 || hours === 0) {
      timeString += `${minutes} ${minutes === 1 ? "хвилина" : "хвилин"}`;
    }

    setOpacity(0);
    setTimeout(() => {
      setOutput(timeString.trim() || "0 хвилин");
      setOpacity(1);
    }, 300);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="number"
            placeholder="Введіть хвилини"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      <span>..........................</span>
      <p style={{ opacity, transition: "opacity 0.3s" }}>{output}</p>
    </div>
  );
}

// const gameContainerEl = document.getElementById('5');
// gameContainerEl.insertAdjacentHTML(
//   'beforeend',
//   `
//   <div class="time__div">
//     <form class="time__form">
//       <label class="time__label">
//         <input class="time__input" type="number" placeholder="Введіть хвилини">
//       </label>
//        <button class="time__btn" type="submit">
//     <img src="${searchImg}" alt="search">
//     </button>
//     </form>

//     <span class="time__span">..........................</span>
//     <p class="time__text">3 дн. 15:45:01</p>
//   </div>`
// );
// const form = document.querySelector('.time__form');
// const input = document.querySelector('.time__input');
// const output = document.querySelector('.time__text');
// console.log('time');
// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.log('hello');
//   const value = input.value;
//   if (value === '' || value < 0) {
//     output.textContent = 'Введіть положитільне чісло';
//     return;
//   }
//   const totalMinutes = parseInt(value);
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;
//   let timeString = '';
//   if (hours > 0) {
//     timeString += `${hours} ${hours === 1 ? 'година' : 'годин'} `;
//   }
//   if (minutes > 0) {
//     timeString += `${minutes} ${minutes === 1 ? 'хвилина' : 'хвилин'}`;
//   }
//   output.style.opacity = '0';
//   setTimeout(() => {
//     output.textContent = timeString || '0 хвилин';
//     output.style.opacity = '1';
//   }, 300);
// });
