import Image from "next/image";
import { ChangeEvent, useContext } from "react";
import PageContext from "../contexts/pageContext";

interface Props {
  handleSearch: (text: string) => void;
}
export const SearchBar: React.FC<Props> = ({ handleSearch }) => {
  const { currentPage } = useContext(PageContext);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    handleSearch(e.target.value);
  }

  const placeholder: string = (() => {
    switch (currentPage) {
      case "index":
        return "Search for movies or TV series";
      case "movies":
        return "Search for movies";
      case "tv":
        return "Search for TV series";
      case "bookmarks":
        return "Search for bookmarked shows";
    }
  })();

  return (
    <div className="searchbar-wrapper">
      <label htmlFor="searchbar">
        <Image src="/assets/icon-search.svg" alt="" width="24" height="24" />
      </label>
      <input id="searchbar" onChange={handleChange} placeholder={placeholder} />
    </div>
  );
};
