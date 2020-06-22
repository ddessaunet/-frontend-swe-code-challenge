import React from "react";

import "./App.css";
import { CountriesList, SelectionControl } from "./components";

function App() {
  return (
    <div>
      <h1>
        Countries around the world{" "}
        <span role="img" aria-label="World emoji">
          🌎
        </span>
      </h1>
      <div className="countriesContainer">
        <CountriesList />
        <SelectionControl />
      </div>
    </div>
  );
}

export default App;
