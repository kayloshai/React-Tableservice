import React from "react";
import {
  useDataState,
  useDataUpdate,
  useDataStyles,
  useDataLogo,
} from "./dataContext";

export default function ContextComponent() {
  const states = useDataState();
  const setStates = useDataUpdate();
  const dataStyles = useDataStyles(states["darkTheme"]);
  const logo = useDataLogo();
  return (
    <div className="App" style={dataStyles}>
      <header className="App-header">
        <img src={states["logo"]} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={setStates["toggleTheme"]}>Toggle Theme</button>
      </header>
    </div>
  );
}
