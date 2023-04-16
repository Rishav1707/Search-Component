import { useState } from "react";
import { foods, filterItems } from "./Recipes";
import "./App.css";

export default function FilterableList() {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <h3>Food Menu</h3>
      <SearchBar query={query} onChange={handleChange} />
      <List items={results} />
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search: <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <ul className="list">
      {items.map((food) => (
        <li key={food.id}>
          <img className="avatar" src={food.src} alt={food.name} />
          <h3>{food.name}</h3>
          <p>{food.description}</p>
        </li>
      ))}
    </ul>
  );
}
