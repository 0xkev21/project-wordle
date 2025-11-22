import React, { useState } from "react";

function Form({ handleSubmitGuess }) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(input);
    setInput("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
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
