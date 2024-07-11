import { useEffect, useState } from "react";
import React from "react";
import "../App.css";

function App() {
  const [state, setState] = useState();
  const changeHandler = (e) => {
    if (e.key === "Enter") {
      setState((prev) => prev + "\n");
    } else {
      setState(e.target.value);
    }
  };
  useEffect(() => {
    console.log("State changed:", state);
  }, [state]);
  return (
    <div className="app">
      <div className="left">
        <textarea className="textarea" onChange={changeHandler} />
      </div>
      <div className="preview">
        <p>{state}</p>
      </div>
    </div>
  );
}

export default App;
