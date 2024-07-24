import s from "./SearchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ setQuery }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formInput = e.target.elements.query;
    setQuery(formInput.value);
    if (formInput.value.trim() === "") {
      toast("Enter your search text", {
        duration: 4000,
        position: "top-center",
        className: "toastMessage",
      });
      return;
    };
    e.target.reset();
  };

    return (
        <header className={s.header}> 
  <form onSubmit={handleSubmit} className={s.serchForm}>
    <input name="query"
      type="search"
      autoComplete="off"
      autoFocus 
      placeholder="Search images and photos"
      className={s.serchImput}              
    />
    <button   className={s.searchBtn} type="submit">Search</button>
  </form>
</header>

    );
};
export default SearchBar;