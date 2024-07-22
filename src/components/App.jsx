import { useEffect, useState } from "react";
import "../index.css"
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import {fetchImages} from "../services/api"
import Loader from "./Loader/Loader";


const App = () => {

  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      try {
        if (!query) {
          return
        };
        setIsLoading(true);
        const res = await fetchImages(query);
        setSearchData(res.results);
      } catch (error) {
        console.log(error);
      } finally { 
        setIsLoading(false);
      };
    };
    getImages();
  }, [query]);

    return (
    <>
        < SearchBar setQuery={setQuery} />
        <ImageGallery images={searchData} />
        {isLoading && <Loader />}
    </>
  );
};

export default App;

