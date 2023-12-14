import React from "react";

export default function Header({ onButtonClick }) {
  return (
    <>
      <header>
        <div className="button-container">
          <button onClick={() => onButtonClick("Menu")}>Our Menu</button>
          <button onClick={() => onButtonClick("Main")}>Abort</button>
          <button onClick={() => onButtonClick("HoursLocation")}>
            Hours & Location
          </button>
        </div>
      </header>
    </>
  );
}
