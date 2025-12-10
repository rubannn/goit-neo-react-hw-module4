import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import ImageModal from "./ImageModal/ImageModal";
import fetchImage from "../api/unsplash-api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

import css from "./App.module.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [modalImage, setModalImage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    document.title = query ? `Search: ${query}` : "Gallery App";
  }, [query]);

  useEffect(() => {
    if (!query) return;

    getImages();
    async function getImages() {
      setError("");
      setTotalPages(0);
      setIsLoading(true);

      if (page === 1) setHits([]);

      try {
        const response = await fetchImage({ page, query });
        setHits((prevState) => [...prevState, ...response.data.results]);
        setTotalPages(response.data.total_pages);
        if (response.data.total === 0) throw new Error("No images was found");
      } catch (error) {
        const errorMessage = error.data?.errors.join(", ") || error.toString();

        setError(errorMessage);
      }

      setIsLoading(false);
    }
  }, [query, page]);

  const onSubmit = (query) => {
    setQuery(query);
    setPage(1);
  };

  const onImageClick = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLoadMore = () => {
    setPage((prevState) => (prevState += 1));
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage message={error} />}
      {hits.length > 0 && <ImageGallery items={hits} onClick={onImageClick} />}
      <ImageModal
        image={modalImage}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <div className={css.loadMoreWrapper}>
        {totalPages > 0 && page < totalPages && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
        <Loader visible={isLoading} />
      </div>
      <Toaster />
    </div>
  );
};

export default App;
