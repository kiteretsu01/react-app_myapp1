import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  const a = "enter your text here";
  return (
    <>
      <Navbar about="about TextUtils" />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
