import React, { useState } from "react";

import "./App.css";
import { CountriesList } from "./components";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(undefined);

  return (
    <div>
      <h1>Country selection</h1>

      <p>
        Selected country: <b>{selectedCountry || "Nothing selected yet"}</b>
      </p>

      <p>Please select a country from the list above:</p>

      <div className="countriesContainer">
        <CountriesList
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </div>
    </div>
  );
}

export default App;
