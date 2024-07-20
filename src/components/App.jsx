import { useEffect, useState } from "react";
import "../index.css"
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import ImageGallery from "./ImageGallery/ImageGallery";


const App = () => {

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    axios.get("https://api.unsplash.com/photos/?client_id=yt5lj5TeieHgBwsXTJkdTGG1kyvDllmEJpX4pQ1H2ZQ")
      .then((res) => setSearchData(res.data)).catch()
  }, []);

    return (
    <>
      < SearchBar />
      <ImageGallery images={searchData} />
    </>
  );
};

export default App;

