import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import NavBar from "./NavBar";

function BookDetails() {
  let navigate = useNavigate();
  let { key, author, isbn } = useParams();
  const [book, setBook] = useState({ description: { value: null } });
  const stateref = useRef();
  stateref.current = book;

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

  useEffect(() => {
    getBook();
  }, []);

  const [collectionName, setCollectionName] = useState({});
  const [totalPages, setTotalPages] = useState({});

  const addBook = () => {
    axios({
      method: "POST",
      data: {
        collection_name: collectionName,
        title: book.title,
        key: key,
        author: author,
        isbn: `http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`,
        description: book.description.value ?? "No description found",
        totalPages: totalPages,
      },
      withCredentials: true,
      url: "http://localhost:3001/collections/addBook",
    })
      .then((res) => {
        if (res.error_msg) {
          navigate("/addBook");
        } else {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavBar />
      <img
        src={`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}
        alt="book cover"
      />
      <h3>{book.title}</h3>
      <h4>{author}</h4>
      <p>{book.description?.value ?? "No description found"}</p>
      <div>
        <fieldset>
          <label className="m-3">Collection Name</label>
          <input
            placeholder="My Collection"
            required
            onChange={(e) => setCollectionName(e.target.value)}
          ></input>
          <label className="m-3">Total Pages</label>
          <input
            type="number"
            required
            onChange={(e) => setTotalPages(e.target.value)}
          ></input>
          <button onClick={addBook} className="btn btn-primary btn-sm">
            Submit
          </button>
        </fieldset>
      </div>
    </div>
  );
}

export default BookDetails;
