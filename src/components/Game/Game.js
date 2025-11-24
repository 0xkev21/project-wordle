import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form";
import Guesses from "../Guesses/Guesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameResult, setGameResult] = useState({
    status: "",
    isGameOver: false,
  });
  const handleSubmitGuess = (guess) => {
    const nextGuesses = [
      ...guesses,
      { id: `${guess}-${crypto.randomUUID()}`, guess },
    ];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameResult((prev) => ({
        status: "won",
        isGameOver: true,
      }));
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameResult((prev) => ({
        status: "lost",
        isGameOver: true,
      }));
    } else {
      setGameResult((prev) => ({
        ...prev,
      }));
    }
  };
  return (
    <>
      {gameResult.status === "won" && (
        <WonBanner numOfGuesses={guesses.length} />
      )}
      {gameResult.status === "lost" && <LostBanner answer={answer} />}
      <Guesses guesses={guesses} answer={answer} />
      <Form
        handleSubmitGuess={handleSubmitGuess}
        isGameOver={gameResult.isGameOver}
      />
    </>
  );
}

export default Game;
