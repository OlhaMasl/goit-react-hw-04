import s from "./SearchBar.module.css"

const SearchBar = ({ setQuery }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formInput = e.target.elements.query;
    setQuery(formInput.value);
    e.target.reset();
  }

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