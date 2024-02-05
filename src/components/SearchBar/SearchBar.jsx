import { useState } from "react";

export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const goSearch = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  }

  return (
    <>
      <div>
        <form onSubmit={goSearch}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Type your request"
            name="search"
            required
            autoFocus
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}
