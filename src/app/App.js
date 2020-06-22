import React from "react";

import "./App.css";
import { CountriesList, SelectionControl } from "./components";

function App() {
  return (
    <div>
      <h1>Trivia!</h1>
      <div className="countriesContainer">
        <CountriesList />
        <SelectionControl />
      </div>
    </div>
  );
}

export default App;
