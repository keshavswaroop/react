import React, { useState } from "react";

export default function TextForm(p) {
  const buttonClicked = () => {
    console.log("Uppercase Button was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
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
        <button className="btn btn-primary" onClick={buttonClicked}>
          Convert to Uppercase
        </button>
      </div>
    </>
  );
}
