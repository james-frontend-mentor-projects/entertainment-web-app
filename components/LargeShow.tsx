import Image from "next/image";
import { useState } from "react";
import { DataType } from "../contexts/dataContext";
import { Bookmark } from "./Bookmark";

interface Props {
  show: DataType;
}
export const LargeShow: React.FC<Props> = ({ show }) => {
  return (
    <div className="show large-show">
      <Bookmark show={show} />
      <button
        className="show-image"
        style={{ backgroundImage: `url(${show.thumbnail.trending?.small}` }}
        aria-label="Play movie"
      >
        <section className="show-info">
          <ul className="show-details">
            <li>{show.year}</li>
            <li className="category">
              {show.category === "Movie" ? (
                <Image src="/assets/icon-category-movie.svg" alt="" width="12" height="12" />
              ) : (
                <Image src="/assets/icon-category-tv.svg" alt="" width="12" height="12" />
              )}
              {show.category}
            </li>
            <li>{show.rating}</li>
          </ul>
          <h2>{show.title}</h2>
        </section>
      </button>
    </div>
  );
};
