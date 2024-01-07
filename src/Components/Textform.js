import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const upclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const loclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const clrclick = () => {
    setText("");
  };
  const finrep = () => {
    // let fin = prompt("Enter the text to FIND ");
    // let rep = prompt("Enter the text to REPLACE");
    // let text1=text;
    // let newstr=text1.replaceaAll
    alert("FIND and REPLACE feature is currently under Maintenance");
  };

  const onchange = (event) => {
    setText(event.target.value);
    console.log("onchange");
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          onChange={onchange}
          className="form-control"
          id="text"
          rows="8"
          placeholder="Enter text here"
        ></textarea>
      </div>
      <button id="button" className="btn btn-success" onClick={upclick}>
        UPPERCASE
      </button>
      <button id="button" className="btn btn-success mx-3" onClick={loclick}>
        lowercase
      </button>
      <button id="button" className="btn btn-success mx-3" onClick={clrclick}>
        ClearAll
      </button>
      <button id="button" className="btn btn-success mx-3" onClick={finrep}>
        Find & replace
      </button>

      <h2 className="my-3">Text summary :-</h2>
      <h3>
        {text.split(" ").length} words and {text.length} letters
      </h3>
    </div>
  );
}
