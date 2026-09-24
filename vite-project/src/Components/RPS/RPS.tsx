import React, { useState } from 'react';

type Choice = 'rock' | 'paper' | 'scissors';
type GameResult = 'win' | 'lose' | 'draw' | null;

interface ChoiceData {
  id: Choice;
  label: string;
}

const choices: ChoiceData[] = [
  { id: 'rock', label: 'Rock' },
  { id: 'paper', label: 'Paper' },
  { id: 'scissors', label: 'Scissors' },
];

export function RPS(): React.JSX.Element {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [botChoice, setBotChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<GameResult>(null);
  const [score, setScore] = useState<{ player: number; bot: number }>({ player: 0, bot: 0 });

  const handlePlay = (choice: Choice): void => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)].id;
    setPlayerChoice(choice);
    setBotChoice(randomChoice);

    if (choice === randomChoice) {
      setResult('draw');
    } else if (
      (choice === 'rock' && randomChoice === 'scissors') ||
      (choice === 'scissors' && randomChoice === 'paper') ||
      (choice === 'paper' && randomChoice === 'rock')
    ) {
      setResult('win');
      setScore((prev) => ({ ...prev, player: prev.player + 1 }));
    } else {
      setResult('lose');
      setScore((prev) => ({ ...prev, bot: prev.bot + 1 }));
    }
  };

  const resetScore = (): void => {
    setPlayerChoice(null);
    setBotChoice(null);
    setResult(null);
    setScore({ player: 0, bot: 0 });
  };

  const getResultText = (): string => {
    if (result === 'win') return 'You won.';
    if (result === 'lose') return 'Bot won.';
    if (result === 'draw') return 'Draw.';
    return '';
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Rock, Paper, Scissors</h1>

      <div style={{ fontSize: '20px', marginBottom: '20px' }}>
        <strong>Score:</strong> You {score.player} : {score.bot} Bot
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        {choices.map((item) => (
          <button
            key={item.id}
            onClick={() => handlePlay(item.id)}
            style={{ fontSize: '16px', padding: '10px 20px', cursor: 'pointer' }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {playerChoice && botChoice && (
        <div style={{ marginBottom: '20px' }}>
          <p>
            Your choice: {choices.find((c) => c.id === playerChoice)?.label} | Bot choice:{' '}
            {choices.find((c) => c.id === botChoice)?.label}
          </p>
          <h2>{getResultText()}</h2>
        </div>
      )}

      {(score.player > 0 || score.bot > 0) && (
        <button onClick={resetScore} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Reset Score
        </button>
      )}
    </div>
  );
}