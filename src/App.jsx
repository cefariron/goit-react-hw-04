import { useState, useEffect } from "react";
import { Puff } from "react-loader-spinner";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { getPhotos } from "./api/apiservise";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import toast, { Toaster } from "react-hot-toast";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "react-modal";
import css from "./App.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    width: "800px",
    height: "590px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
  },
};

Modal.setAppElement("#root");

export function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoader(true);

    const fetchData = async () => {
      try {
        const { results, total } = await getPhotos(query, page);
        setImages((prev) => [...prev, ...results]);
        setTotal(total);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSubmit = (value) => {
    if (!value) {
      toast.error("Please enter a search request!");
      return;
    }
    setQuery(value);
    setPage(1);
    setTotal(0);
    setError(null);
    setImages([]);
  };

  const onLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <div className={css.loader}>{loader && <Puff color="green" />}</div>
      {!query && <Toaster />}
      {!images.length && query !== "" && !error && !loader && (
        <ErrorMessage textAlign="center">
          Images with {query} request not find!
        </ErrorMessage>
      )}
      {error && (
        <ErrorMessage textAlign="center">
          Oops! Something went wrong! Error - {error}!
        </ErrorMessage>
      )}
      <ImageGallery items={images} onImageClick={openModal} />
      {images.length > 0 && images.length !== total && (
        <LoadMoreBtn onClick={onLoadMoreClick} disabled={loader}>
          Load more
        </LoadMoreBtn>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={css.modal}
        overlayClassName={css.overlay}
        style={customStyles}
      >
        {selectedImage && (
          <img
            width="800px"
            height="590px"
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
            className={css.modalImage}
          />
        )}
        <button onClick={closeModal} className={css.modalCloseButton}>
          <IoMdCloseCircle className={css.icon} />
        </button>
      </Modal>
    </>
  );
}
