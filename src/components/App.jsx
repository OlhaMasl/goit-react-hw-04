import { useEffect, useState } from "react";
import "../index.css"
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import {fetchImages} from "../services/api"
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";


const App = () => {

  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
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
  }

    return (
    <>
        < SearchBar setQuery={handleSetQuery} />
        <ImageGallery images={searchData} />
        <LoadMoreBtn setPage={setPage} />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
    </>
  );
};

export default App;

