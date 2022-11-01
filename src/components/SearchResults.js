import { useLocation, Link } from "react-router-dom";
import axios from "axios";

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
        <div key={item.key}>
          <img
            src={`http://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg`}
            alt="book cover"
          />
          <Link
            to={`/book/${item.key.split("/")[2]}/${item.author_name[0]}/${
              item.isbn[0]
            }`}
          >
            {item.title}
          </Link>
          <p>Author: {item.author_name[0] || "No Author information found."}</p>
        </div>
      );
    }
    return <div>No results found.</div>;
  });

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults}
    </div>
  );
}

export default SearchResult;
