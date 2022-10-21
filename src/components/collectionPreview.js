import { useEffect, useState } from "react";

const CollectionPreview = ({ collection }) => {
  //   const books = collection.books.map((book) => {
  //     return (
  //       <div key={book._id}>
  //         <p>{book.title}</p>
  //         <br></br>
  //         <p>{book.author}</p>
  //         <br></br>
  //         <p>{book.description}</p>
  //       </div>
  //     );
  //   });
  return (
    <div>
      <h3>{collection.collection_name}</h3>
      {/* {books} */}
    </div>
  );
};

export default CollectionPreview;
