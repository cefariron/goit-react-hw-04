import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
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
            className={css.input}
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search images and photos"
              name="search"
              autoFocus
              autoComplete="off"
            />
            <button className={css.btn} type="submit">
            <IoMdSearch className={css.icon}/>
            </button>
          </form>
        </header>
    </>
  );
}
