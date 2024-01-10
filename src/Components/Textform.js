import React, { useState } from "react";

export default function Textform(props) {
  // const [style, setstyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });

  // if (props.colorscheme === "dark") {
  //   setstyle({
  //     color: "white",
  //     backgroundColor: "black",
  //   });
  // } else {
  //   setstyle({
  //     color: "black",
  //     backgroundColor: "white",
  //   });
  // }

  const countl = () => {
    let str = text;
    let letter = str.replace(/\s+/g, "").length;

    return letter;
  };

  const countw = () => {
    let str = text;

    let words = str.trim().split(/\s+/).length;
    return words;
  };

  const [ct, setct] = useState("Copy Text");
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

  const copied = () => {
    setct("Copied ! ");
    setTimeout(() => {
      setct("Copy Text   ");
    }, 1200);
  };
  const notcopied = () => {
    setct("No Text !");
    setTimeout(() => {
      setct("Copy Text   ");
    }, 1200);
  };
  const copy = () => {
    if ((text = "")) {
      navigator.clipboard.writeText(text);
      copied();
    } else {
      notcopied();
    }
  };

  const onchange = (event) => {
    setText(event.target.value);
    // console.log("onchange");
    // console.log(event.target.value);
  };
  return (
    <div
      style={{
        color: props.colorscheme === "light" ? "black" : "white",
      }}
    >
      <h1
        style={{
          color: props.colorscheme === "light" ? "black" : "white",
        }}
      >
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea
          value={text}
          onChange={onchange}
          className="form-control "
          id="text"
          rows="8"
          placeholder="Enter text here"
          style={{
            backgroundColor:
              props.colorscheme === "dark" ? "rgb(6 2 41)" : "white",
            color: props.colorscheme === "light" ? "black" : "white",
          }}
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
      <button id="button" className="btn btn-success mx-3" onClick={copy}>
        {ct}
      </button>

      <h2 className="my-3">Text summary :-</h2>
      <h3>
        {countl()} letters and {countw()} words
      </h3>
    </div>
  );
}
