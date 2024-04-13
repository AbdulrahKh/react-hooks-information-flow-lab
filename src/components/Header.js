import React from "react";

export default function Header({ onDarkModeClick }) {
  function handleClick() {
    onDarkModeClick();
  }
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={handleClick}>Dark Mode</button>
    </header>
  );
}
