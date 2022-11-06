import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "../styles/bookDetails.css";
import "../images/default_cover0.jpeg";

function BookDetails() {
  let navigate = useNavigate();
  let { key } = useParams();
  const bookInfo = useLocation();
  const [collectionData, setCollections] = useState([]);

  const [book, setBook] = useState({
    description: { value: "No description found." },
  });
  const stateref = useRef();
  stateref.current = book;

  const getBook = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:3001/book/${key}`,
    })
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBook();
  }, []);

  const getCollections = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/collections",
    })
      .then((res) => {
        if (res.data.error_msg) {
          console.log(res.data.error_msg);
        } else {
          setCollections(res.data.collections);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCollections();
    console.log(collectionName);
  }, []);

  const [collectionName, setCollectionName] = useState({});

  const collections = collectionData.map((collection) => {
    return (
      <option key={collection._id} value={collection.collection_name}>
        {collection.collection_name}
      </option>
    );
  });

  const [totalPages, setTotalPages] = useState({});

  const addBook = () => {
    axios({
      method: "POST",
      data: {
        collection_name: collectionName,
        title: bookInfo.state.title,
        key: key,
        author: bookInfo.state.author,
        isbn: bookInfo.state.isbn
          ? `http://covers.openlibrary.org/b/isbn/${bookInfo.state.isbn}-M.jpg`
          : "/images/default_cover0.jpeg",
        description: book.description?.value ?? "No description found",
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
        src={
          bookInfo.state.isbn
            ? `http://covers.openlibrary.org/b/isbn/${bookInfo.state.isbn}-M.jpg`
            : "/images/default_cover0.jpeg"
        }
        alt="book cover"
      />
      <h3>{bookInfo.state.title}</h3>
      <h4>{bookInfo.state.author}</h4>
      <p>{book.description?.value ?? "No description found"}</p>
      <div>
        <fieldset>
          <select
            className="collection-dropdown"
            placeholder="Collection"
            onChange={(e) => setCollectionName(e.target.value)}
          >
            {collections}
          </select>
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
