import { useEffect, useState, useRef } from "react";
import BookProgress from "./progressForm";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../styles/collectionSplide.css";

const CollectionPreview = ({ collection }) => {
  const [bookData, setBookData] = useState([]);
  const books = bookData.map((item) => {
    return (
      <SplideSlide className="splide-slide" key={item.book._id}>
        <img className="book-cover" src={item.book.isbn}></img>
        <div className="pt-2">
          <p className="book-title">{item.book.title}</p>
          <p className="book-author">{item.book.author}</p>
        </div>
        {collection.collection_name == "Currently Reading" ? (
          <BookProgress book_id={item.book._id}></BookProgress>
        ) : (
          false
        )}
      </SplideSlide>
    );
  });

  useEffect(() => setBookData(collection.books), []);

  return (
    <div>
      <h3 className="pb-1">{collection.collection_name}</h3>
      <Splide
        className="collection-splide"
        options={{
          gap: "0.1rem",
          perPage: 4,
        }}
        aria-labelledby="Collection"
      >
        {books}
      </Splide>
    </div>
  );
};

export default CollectionPreview;
