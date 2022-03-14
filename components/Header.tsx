import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import PageContext from "../contexts/pageContext";

export const Header: React.FC = () => {
  const { currentPage } = useContext(PageContext);

  return (
    <header className="header">
      <Link href="/">
        <a className="logo">
          <Image src={"/assets/logo.svg"} alt="logo" width="25" height="20" />
          <span className="sr-only">Home</span>
        </a>
      </Link>
      <nav>
        <ul className="tabs">
          <li className={currentPage === "index" ? "active" : undefined}>
            <Link href="/">
              <a>
                <Image src={"/assets/icon-nav-home.svg"} alt="All movies and TV" width="16" height="16" />
                <span className="sr-only">All movies and TV</span>
              </a>
            </Link>
          </li>
          <li className={currentPage === "movies" ? "active" : undefined}>
            <Link href="/movies">
              <a>
                <Image src={"/assets/icon-nav-movies.svg"} alt="All movies" width="16" height="16" />
                <span className="sr-only">All movies</span>
              </a>
            </Link>
          </li>
          <li className={currentPage === "tv" ? "active" : undefined}>
            <Link href="/tv-series">
              <a>
                <Image src={"/assets/icon-nav-tv-series.svg"} alt="All TV" width="16" height="16" />
                <span className="sr-only">All TV</span>
              </a>
            </Link>
          </li>
          <li className={currentPage === "bookmarks" ? "active" : undefined}>
            <Link href="/bookmarks">
              <a>
                <Image src={"/assets/icon-nav-bookmark.svg"} alt="Bookmarks" width="13.54" height="16" />
                <span className="sr-only">Bookmarks</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <a href="#" className="user">
        <Image src={"/assets/image-avatar.png"} alt="User avatar" width="24" height="24" />
        <span className="sr-only">User avatar</span>
      </a>
    </header>
  );
};
