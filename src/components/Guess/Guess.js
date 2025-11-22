import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const letterArray =
    guess &&
    guess.split("").map((letter) => ({
      letter,
      id: crypto.randomUUID(),
    }));
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={letterArray ? letterArray[i].id : i} className="cell">
          {letterArray && letterArray[i].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
