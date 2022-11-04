import { useEffect, useState, useRef } from "react";
import BookProgress from "./progressForm";

const CollectionPreview = ({ collection }) => {
  const [bookData, setBookData] = useState([]);
  const books = bookData.map((item) => {
    return (
      <div key={item.book._id}>
        <p>{item.book.title}</p>
        <br></br>
        <p>{item.book.author}</p>
        <br></br>
        <p>{item.book.description}</p>
        <p>{item.book._id}</p>
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
