import { useState, useEffect, useRef } from "react";

export const Dino = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isDead, setIsDead] = useState<boolean>(false);
  const [cacti, setCacti] = useState<number[]>([]);

  const dinoRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef<HTMLDivElement | null>(null);

  const handleStartGame = () => {
    setIsPlaying(true);
    setIsDead(false);
    setCacti([]);
  };

  const handleJump = () => {
    if (!isPlaying || isJumping || isDead) return;

    setIsJumping(true);
    setTimeout(() => {
      setIsJumping(false);
    }, 500);
  };

  useEffect(() => {
    if (!isPlaying || isDead) return;

    const cactusInterval = setInterval(() => {
      setCacti((prev) => [...prev, Date.now()]);
    }, 2000);

    return () => clearInterval(cactusInterval);
  }, [isPlaying, isDead]);

  useEffect(() => {
    if (cacti.length === 0) return;

    const timer = setTimeout(() => {
      setCacti((prev) => prev.slice(1));
    }, 2000);

    return () => clearTimeout(timer);
  }, [cacti]);

  useEffect(() => {
    if (!isPlaying || isDead) return;

    const checkCollision = () => {
      const dino = dinoRef.current;
      const game = gameRef.current;
      if (!dino || !game) return;

      const dinoRect = dino.getBoundingClientRect();
      const cactusElements = game.querySelectorAll<HTMLDivElement>(".cactus");

      cactusElements.forEach((cactus) => {
        const cactusRect = cactus.getBoundingClientRect();

        if (
          dinoRect.left < cactusRect.right &&
          dinoRect.right > cactusRect.left &&
          dinoRect.bottom > cactusRect.top &&
          dinoRect.top < cactusRect.bottom
        ) {
          setIsDead(true);
          setIsPlaying(false);

          setTimeout(() => {
            alert("Game Over!");
          }, 100);
        }
      });
    };

    const collisionInterval = setInterval(checkCollision, 100);
    return () => clearInterval(collisionInterval);
  }, [isPlaying, isDead]);

  return (
    <div className="game-wrapper">
      <div
        id="game"
        ref={gameRef}
        onClick={handleJump}
        style={{ position: "relative", cursor: isPlaying ? "pointer" : "default" }}
      >
        <div
          ref={dinoRef}
          id="dino"
          className={`${isJumping ? "jump" : ""} ${isDead ? "dead" : ""}`}
        />

        {cacti.map((id) => (
          <div key={id} className="cactus" />
        ))}

        {!isPlaying && (
          <button id="startBtn" onClick={handleStartGame}>
            {isDead ? "Play again" : "Start"}
          </button>
        )}
      </div>
    </div>
  );
};