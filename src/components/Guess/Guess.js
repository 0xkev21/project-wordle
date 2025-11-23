import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const letterArray =
    guess &&
    checkGuess(guess, answer).map(({ letter, status }) => ({
      letter,
      status,
      id: crypto.randomUUID(),
    }));
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span
          key={letterArray ? letterArray[i].id : i}
          className={`cell ${
            letterArray && letterArray[i] ? letterArray[i].status : ""
          }`}
        >
          {letterArray && letterArray[i].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
