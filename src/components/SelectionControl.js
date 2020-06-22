import React from "react";

function SelectionControl() {
  return (
    <div className="selectionControls">
      <span role="img" aria-label="up arrow button" className="arrowButton">
        ⬆️
      </span>
      <span role="img" aria-label="down arrow button" className="arrowButton">
        ⬇️
      </span>
    </div>
  );
}

export default SelectionControl;
