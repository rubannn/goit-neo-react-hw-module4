import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value.trim();
    if (query.length === 0)
      return toast("Input cannot be empty", {
        duration: 4000,
        position: "top-center",
      });
    onSubmit(query);
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
        />
        <button type="submit">
          <CiSearch width={32} height={32} className={css.icon} />
          Search
        </button>
      </form>
    </header>
  );
}
