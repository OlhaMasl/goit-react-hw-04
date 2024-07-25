import s from "./SearchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ setQuery }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formInput = e.target.elements.query;
    if (formInput.value.trim() === "") {
       toast("Enter your search text", {
        duration: 3000,
        position: "top-center",
      });
      return;
    };
    setQuery(formInput.value);
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
    <button className={s.searchBtn} type="submit">Search</button>
    <Toaster toastOptions={{
    className: 'toastMessge',
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
  }}/>
  </form>
</header>

    );
};
export default SearchBar;