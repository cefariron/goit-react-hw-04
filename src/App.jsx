import { useState, useEffect } from "react";
// import css from './App.module.css'

import { SearchBar } from "./components/SearchBar/SearchBar";
import { getPhotos } from "./api/apiservise";

export function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoader(true);

    try {
      const data = getPhotos(query, page);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }

    // getPhotos(query, page)
    //   .then(({ photos, total_results }) => {
    //     setImages(prev => [...prev, ...photos]);
    //     setTotal(total_results);
    //   })
    //   .catch(err => {
    //     setError(err.message);
    //   })
    //   .finally(() => setLoader(false));
  }, [query, page]);

  const handleSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setTotal(0);
    setError(null);
    setImages([]);
  };

  const onLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
    </>
  );
}
