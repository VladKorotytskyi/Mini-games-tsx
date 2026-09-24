import { useState } from 'react';

export function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };

  return (
    <header>
      <div id="logo-container">
        <img src="#" alt="Logo" />
      </div>
      <button id="themeToggle" onClick={toggleTheme}>
        {isDark ? '🌙' : '🌞'}
      </button>
    </header>
  );
}