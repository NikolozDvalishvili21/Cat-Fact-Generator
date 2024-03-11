import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  // useEffect(() => {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  //   });
  // }, []);

  const title = <h1>Random Cat Fact Generator</h1>;
  const helper = (
    <h4>
      Click the button to get <br></br> a Random Cat Fact
    </h4>
  );

  const butTrue = true;

  return (
    <div className="box">
      <div>{title}</div>
      <div>{helper}</div>
      <div className="button">
        {butTrue ? (
          <button onClick={fetchCatFact}>Generate A Fact</button>
        ) : (
          <button>Generate silly Quote</button>
        )}
      </div>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
