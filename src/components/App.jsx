import { useEffect, useState } from "react";
import "../index.css"
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import {fetchImages} from "../services/api"


const App = () => {

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await fetchImages("cat");
        setSearchData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);

    return (
    <>
      < SearchBar />
      <ImageGallery images={searchData} />
    </>
  );
};

export default App;

