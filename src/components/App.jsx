import { useEffect, useState } from "react";
import "../index.css"
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import {fetchImages} from "../services/api"
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal"


const App = () => {

  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [bigImage, setBigImage] = useState("");
 

  useEffect(() => {
    const getImages = async () => {
      try {

        if (!query) {
          return
        };
        setIsLoading(true);
        setIsError(false);
        const res = await fetchImages(query, page);
        setSearchData((prev) => [...prev, ...res.results]);
        setShowBtn(res.total_pages && res.total_pages !== page)

      } catch (error) {
        setIsError(true);

      } finally { 

        setIsLoading(false);
      };
    };
    getImages();
  }, [query, page]);

  const handleSetQuery = query => {
    setQuery(query);
    setSearchData([]);
    setPage(1);
  };

  const onClickImage = (bigPhoto) => {
    setBigImage(bigPhoto);
    console.log(bigPhoto);
    setIsOpen(true);
  };

  function openModal() {
    setIsOpen(true);
  };
  function closeModal() {
    setIsOpen(false);
  };

    return (
    <>
        < SearchBar setQuery={handleSetQuery} />
        <ImageGallery images={searchData} onClickFn={onClickImage} />
        {showBtn && <LoadMoreBtn setPage={setPage} />}
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {modalIsOpen && <ImageModal image={bigImage} openFn={openModal} closeFn={closeModal} />}
    </>
  );
};

export default App;

