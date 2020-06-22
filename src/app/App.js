import React from "react";

import "./App.css";
import { QuestionsList, SelectionControl } from "./components";

function App() {
  return (
    <div>
      <h1>Trivia!</h1>
      <div className="questionsContainer">
        <QuestionsList />
        <SelectionControl />
      </div>
    </div>
  );
}

export default App;
