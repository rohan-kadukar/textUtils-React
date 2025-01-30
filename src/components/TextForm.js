import React, { useState } from "react";
// import "./TextFrom.css"; // Import custom CSS

export default function TextFrom(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleCapitalizeClick = () => {
    let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
    props.showAlert("Capitalized Each Word", "success");
  };

  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text Reversed", "success");
  };

  const handleRemoveExtraSpacesClick = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard", "success");
  };

  const handleSentenceCaseClick = () => {
    let newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase());
    setText(newText);
    props.showAlert("Converted to Sentence Case", "success");
  };
  

  const [text, setText] = useState("");

  let wordCount = 0;
  if (text.trim().length !== 0) {
    wordCount = text.split(" ").filter((word) => word.length > 0).length;
  }

  return (
    <>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{ backgroundColor: props.mode === 'dark' ? '#333' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            value={text}
            rows="8"
            placeholder="Enter the text here"
          ></textarea>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
            Convert To Lowercase
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeClick}>
            Capitalize Each Word
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>
            Reverse Text
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpacesClick}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleSentenceCaseClick}>
            Convert to Sentence Case
          </button>
        </div>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>
          {wordCount} Words and {text.length} Characters
        </p>
        <p>{0.008 * wordCount} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in textbox above to preview it here."}</p>
      </div>
    </>
  );
}
