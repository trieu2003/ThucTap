// import logo from "./logo.svg";
// import "./App.css";
// import React, { useState, createContext } from "react";
// import Context from "./Context";

// const ExContext = React.createContext();

// const Display = () => {
//   return (
//     <ExContext.Consumer>
//       {(value) => <div>Xin chào {value} !!!</div>}
//     </ExContext.Consumer>
//   );
// };

// function App() {
//   return (
//     <ExContext.Provider value="MIKE">
//       <div>
//         <Display></Display>
//       </div>
//     </ExContext.Provider>
//   );
// }

// export default App;

import React, { useContext } from "react";
import { useState } from "react";

const exContextButton = React.createContext("light");

const ToggColorButton = () => {
  const { useThemes, thaydoi } = useContext(exContextButton);
  return (
    <button
      style={{
        backgroud: useThemes === "light" ? "#fff" : "#333",
        color: useThemes === "light" ? "#000" : "#fff",
      }}
      onClick={thaydoi}
    >
      Đổi màu hộ cái quá mệt mỏi r 
      
    </button>
  );
};

function App() {
  const [useThemes, setThemes] = useState("light");
  const thaydoi = () => {
    setThemes((prevSetThemes) =>
      prevSetThemes === "light" ? "dark" : "light"
    );
  };
  return (
    <exContextButton.Provider value={{ useThemes, thaydoi }}>
      <ToggColorButton></ToggColorButton>
    </exContextButton.Provider>
  );
}
export default App;
