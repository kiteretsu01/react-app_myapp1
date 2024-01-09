import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    width: "18rem",
    color: "black",
    backgroundColor: "white",
  });
  let border = {
    border: "1px solid black",
  };
  let root = {
    color: "red",
    display: "flex",
    justifyContent: "",
    marginLeft: "4px",
  };
  const [mode, setMode] = useState("Enable Dark Mode");

  const toggle = () => {
    if (myStyle.color == "black") {
      setmyStyle({ color: "white", backgroundColor: "black" });
      setMode("Enable Light Mode");
    } else if (myStyle.color == "white") {
      setmyStyle({ color: "black", backgroundColor: "white" });
      setMode("Enable Dark Mode");
    }
  };
  return (
    <>
      <div className="container" id="cards " style={root}>
        <div className="card" style={myStyle}>
          <img
            src="https://source.unsplash.com/random/300x200?sig={Math.random()}"
            className="card-img-top"
            alt="a random image here"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={myStyle}>
          <img
            src="https://source.unsplash.com/random/300x200?sig={Math.random()}"
            className="card-img-top"
            alt="a random image here"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={myStyle}>
          <img
            src="https://source.unsplash.com/random/300x200?sig={Math.random()}"
            className="card-img-top"
            alt="a random image here"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={myStyle}>
          <img
            src="https://source.unsplash.com/random/300x200?sig={Math.random()}"
            className="card-img-top"
            alt="a random image here"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="container my-3 mx-4">
        <button className="btn btn-light " onClick={toggle}>
          {mode}
        </button>
      </div>
    </>
  );
}
