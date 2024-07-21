import s from "./SearchBar.module.css"

const SearchBar = () => {
    return (
        <header className={s.header}> 
  <form className={s.serchForm}>
    <input
      type="search"
      autoComplete="off"
      autoFocus 
      placeholder="Search images and photos"
      className={s.serchImput}              
    />
    <button className={s.searchBtn} type="submit">Search</button>
  </form>
</header>

    );
};
export default SearchBar;