import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";

function App() {
  const [appmode, setappmode] = useState("light");

  const togglemode = () => {
    if (appmode == "light") {
      setappmode("dark");
      document.body.style.backgroundColor = "#07022e";
    } else {
      setappmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        about="About"
        /*search="hidden"*/ colorscheme={appmode}
        togglemode={togglemode}
      />
      <div className="container my-3">
        <Textform
          heading="Enter the text to analyze"
          colorscheme={appmode}
          togglemode={togglemode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
