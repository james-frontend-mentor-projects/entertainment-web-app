import { createContext, useContext, useEffect, useState } from "react";

export type PageName = "index" | "movies" | "tv" | "bookmarks";

interface Props {
  currentPage: PageName;
  updateCurrentPage?: (pageName: PageName) => void;
}

const PageContext = createContext<Props>({ currentPage: "index" });

export const PageProvider: React.FC = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageName>("index");

  function updateCurrentPage(pageName: PageName) {
    setCurrentPage(pageName);
  }

  return <PageContext.Provider value={{ currentPage, updateCurrentPage }}>{children}</PageContext.Provider>;
};

export default PageContext;
