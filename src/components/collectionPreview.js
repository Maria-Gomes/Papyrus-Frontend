import { useEffect, useState } from "react";

const CollectionPreview = ({ collection }) => {
  const [bookData, setBookData] = useState([]);
  const books = bookData.map((item) => {
    console.log(item.book.title);
    return (
      <div key={item.book._id}>
        <p>{item.book.title}</p>
        <br></br>
        <p>{item.book.author}</p>
        <br></br>
        <p>{item.book.description}</p>
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
