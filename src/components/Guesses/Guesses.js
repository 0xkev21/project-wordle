import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Guess from "../Guess/Guess";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess
          guess={guesses[i] && guesses[i].guess}
          key={guesses[i] ? guesses[i].id : i}
        />
      ))}
    </div>
  );
}

export default Guesses;
