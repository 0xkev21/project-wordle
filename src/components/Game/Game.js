import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form";
import Guesses from "../Guesses/Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const handleSubmitGuess = (guess) => {
    setGuesses([...guesses, { id: `${guess}-${crypto.randomUUID()}`, guess }]);
  };
  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <Form handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
