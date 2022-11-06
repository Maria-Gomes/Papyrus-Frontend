import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { Navbar } from "react-bootstrap";
import NavBar from "./NavBar";
import "../images/default_cover0.jpeg";

function SearchResult() {
  const { state } = useLocation();
  const { results } = state;
  const searchResults = results.docs.map((item) => {
    if (item) {
      if (!item.author_name) {
        item.author_name = [];
      }
      if (!item.isbn) {
        item.isbn = [];
      }
      return (
        <div>
          <div key={item.key}>
            <img
              src={
                item.isbn[0]
                  ? `http://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg`
                  : "/images/default_cover0.jpeg"
              }
              alt="book cover"
            />
            <Link
              to={`/book/${item.key.split("/")[2]}`}
              state={{
                isbn: item.isbn[0],
                title: item.title,
                author: item.author_name[0] ?? "No author found",
              }}
            >
              {item.title}
            </Link>
            <p>
              Author: {item.author_name[0] || "No Author information found."}
            </p>
          </div>
        </div>
      );
    }
    return <div>No results found.</div>;
  });

  return (
    <div>
      <NavBar />
      <h1>Search Results</h1>
      {searchResults}
    </div>
  );
}

export default SearchResult;
