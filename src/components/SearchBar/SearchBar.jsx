import { useState } from "react";
import css from './SearchBar.module.css';

export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const goSearch = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
        <header className={css.header}>
          <form className={css.form} onSubmit={goSearch}>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search images and photos"
              name="search"
              autoFocus
              autoComplete="off"
            />
            <button type="submit">Search</button>
          </form>
        </header>
    </>
  );
}
