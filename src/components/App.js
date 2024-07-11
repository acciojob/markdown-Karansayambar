// import { useEffect, useState } from "react";
// import React from "react";
// import "../App.css";

// function App() {
//   const [state, setState] = useState();
//   const changeHandler = (e) => {
//     if (e.key === "Enter") {
//       setState((prev) => prev + "\n");
//     } else {
//       setState(e.target.value);
//     }
//   };
//   useEffect(() => {
//     console.log("State changed:", state);
//   }, [state]);
//   return (
//     <div className="app">
//       <div className="left">
//         <textarea className="textarea" onChange={changeHandler} />
//       </div>
//       <div className="preview">
//         <p className="loading">{state}</p>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import "../App.css";

// function App() {
//   const [state, setState] = useState("");

//   const changeHandler = (e) => {
//     if (e.key === "Enter") {
//       setState((prev) => prev + "\n");
//     } else {
//       setState(e.target.value);
//     }
//   };

//   useEffect(() => {
//     console.log("State changed:", state);
//   }, [state]);

//   return (
//     <div className="app">
//       <div className="left">
//         <textarea
//           className="textarea"
//           onChange={(e) => setState(e.target.value)}
//           onKeyDown={changeHandler}
//           value={state}
//           placeholder="Write your markdown here..."
//         />
//       </div>
//       <div className="preview">
//         <h1 className="loading">{state}</h1>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import marked from "marked";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  useEffect(() => {
    console.log("Markdown updated:", markdown);
  }, [markdown]);

  return (
    <div className="app">
      <div className="left">
        <textarea
          className="textarea"
          value={markdown}
          onChange={handleChange}
          placeholder="Write your markdown here..."
        />
      </div>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}

export default App;
