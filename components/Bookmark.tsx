import Image from "next/image";
import { useContext } from "react";
import DataContext, { DataType } from "../contexts/dataContext";

interface Props {
  show: DataType;
}
export const Bookmark: React.FC<Props> = ({ show }) => {
  const { updateBookmark } = useContext(DataContext);

  return (
    <button className="bookmark" onClick={() => updateBookmark && updateBookmark(show)}>
      <Image
        src={show.isBookmarked ? "/assets/icon-bookmark-full.svg" : "/assets/icon-bookmark-empty.svg"}
        alt="Set bookmark"
        width="11.67"
        height="14"
      />
      <span className="sr-only">Set bookmark</span>
    </button>
  );
};
