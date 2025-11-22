import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ guess: input });
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value.toUpperCase());
        }}
        pattern="^[a-zA-Z]{5}$"
        required
        title="5 letter word"
      />
    </form>
  );
}

export default Form;
