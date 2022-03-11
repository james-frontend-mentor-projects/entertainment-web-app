import { createContext, useContext, useEffect, useState } from "react";

import data from "../data/data.json";
import PageContext, { PageName } from "./pageContext";

export type DataType = {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};

interface Props {
  all: DataType[];
  trending: DataType[];
  recommended: DataType[];
  movies: DataType[];
  tvShows: DataType[];
  bookmarkedMovies: DataType[];
  bookmarkedTvShows: DataType[];
  filteredResults: DataType[];
  updateFilteredResults?: (searchText: string) => void;
  updateBookmark?: (show: DataType) => void;
}

const DataContext = createContext<Props>({
  all: [],
  trending: [],
  recommended: [],
  movies: [],
  tvShows: [],
  bookmarkedMovies: [],
  bookmarkedTvShows: [],
  filteredResults: [],
});

export const DataProvider: React.FC = ({ children }) => {
  const { currentPage } = useContext(PageContext);

  const [all, setAll] = useState<DataType[]>([]);
  const [trending, setTrending] = useState<DataType[]>([]);
  const [recommended, setRecommended] = useState<DataType[]>([]);
  const [movies, setMovies] = useState<DataType[]>([]);
  const [tvShows, setTvShows] = useState<DataType[]>([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState<DataType[]>([]);
  const [bookmarkedTvShows, setBookmarkedTvShows] = useState<DataType[]>([]);
  const [filteredResults, setFilteredResults] = useState<DataType[]>([]);

  useEffect(() => {
    setAll(data);
  }, []);

  useEffect(() => {
    let tempTrending = [];
    let tempRecommended = [];
    let tempMovies = [];
    let tempTvShows = [];
    let tempBookmarkedMovies = [];
    let tempBookmarkedTvShows = [];

    for (const show of all) {
      if (show.isTrending) {
        tempTrending.push(show);
      } else {
        tempRecommended.push(show);
      }

      if (show.category === "Movie") {
        tempMovies.push(show);
        if (show.isBookmarked) {
          tempBookmarkedMovies.push(show);
        }
      } else {
        tempTvShows.push(show);
        if (show.isBookmarked) {
          tempBookmarkedTvShows.push(show);
        }
      }
    }

    setTrending(tempTrending);
    setRecommended(tempRecommended);
    setMovies(tempMovies);
    setTvShows(tempTvShows);
    setBookmarkedMovies(tempBookmarkedMovies);
    setBookmarkedTvShows(tempBookmarkedTvShows);
  }, [all]);

  function updateShow(originalShow: DataType, showToCompare: DataType) {
    if (originalShow.title === showToCompare.title) {
      return {
        ...originalShow,
        isBookmarked: !originalShow.isBookmarked,
      };
    } else return originalShow;
  }

  function updateBookmark(show: DataType) {
    setAll(all.map((originalShow) => updateShow(originalShow, show)));
    setFilteredResults(filteredResults.map((originalShow) => updateShow(originalShow, show)));
  }

  function updateFilteredResults(searchText: string) {
    switch (currentPage) {
      case "index":
        setFilteredResults(all.filter((show) => show.title.toLowerCase().includes(searchText.toLowerCase().trim())));
        break;
      case "movies":
        setFilteredResults(movies.filter((show) => show.title.toLowerCase().includes(searchText.toLowerCase().trim())));
        break;
      case "tv":
        setFilteredResults(
          tvShows.filter((show) => show.title.toLowerCase().includes(searchText.toLowerCase().trim()))
        );
        break;
      case "bookmarks":
        setFilteredResults(
          all.filter((show) => show.isBookmarked && show.title.toLowerCase().includes(searchText.toLowerCase().trim()))
        );
        break;
    }
  }

  return (
    <DataContext.Provider
      value={{
        all,
        trending,
        recommended,
        movies,
        tvShows,
        bookmarkedMovies,
        bookmarkedTvShows,
        updateBookmark,
        filteredResults,
        updateFilteredResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
