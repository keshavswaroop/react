import React, { useState } from "react";

export default function TextForm(p) {
  const buttonClickedUpperCase = () => {
    console.log("Uppercase Button was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const buttonClickedLowerCase = () => {
    console.log("Uppercase Button was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const buttonClickedClear = () => {
    setText("");
  };
  const textChanged = (event) => {
    console.log("The additional text is entered");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text");
  return (
    <>
      <h1>{p.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="mybox"
          rows="8"
          onChange={textChanged}
        ></textarea>
        <button
          className="btn btn-primary mx-3"
          onClick={buttonClickedUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={buttonClickedLowerCase}
        >
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={buttonClickedClear}>
          Clear
        </button>
        <div className="component">
          <h3>Text Summary</h3>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p className="textSummary">
            <h3>Text Preview</h3>
            {text}
          </p>
        </div>
      </div>
    </>
  );
}
