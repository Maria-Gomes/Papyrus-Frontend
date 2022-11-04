import { useEffect, useState, useRef } from "react";
import BookProgress from "./progressForm";

const CollectionPreview = ({ collection }) => {
  const [bookData, setBookData] = useState([]);
  const books = bookData.map((item) => {
    return (
      <div key={item.book._id}>
        <img src={item.book.isbn}></img>
        <p>{item.book.title}</p>
        <p>{item.book.author}</p>
        {collection.collection_name == "Currently Reading" ? (
          <BookProgress book_id={item.book._id}></BookProgress>
        ) : (
          false
        )}
      </div>
    );
  });

  useEffect(() => setBookData(collection.books), []);

  return (
    <div>
      <h3>{collection.collection_name}</h3>
      {books}
    </div>
  );
};

export default CollectionPreview;
