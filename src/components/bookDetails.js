import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BookDetails() {
  let { key, author, isbn } = useParams();
  const [book, setBook] = useState({});

  const getBook = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:3001/book/${key}/${author}/${isbn}`,
    })
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getBook(), [book]);

  return (
    <div>
      <img
        src={`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}
        alt="book cover"
      />
      <h3>{book.title}</h3>
      <p>{author}</p>
    </div>
  );
}

export default BookDetails;
