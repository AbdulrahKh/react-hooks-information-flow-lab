import React from "react";

export default function Filter({ onCategoryChange }) {
  function handleChange() {
    onCategoryChange(event);
  }
  return (
    <select name="filter" onChange={handleChange}>
      <option value="All">Filter by category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}
