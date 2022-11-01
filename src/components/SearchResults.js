import { useLocation, Link } from "react-router-dom";
import axios from "axios";

function SearchResult() {
  const { state } = useLocation();
  const { results } = state;
  const searchResults = results.docs.map((item) => {
    if (item) {
      return (
        <div key={item.key}>
          <Link to={`/book/${item.key.split("/")[2]}`}>{item.title}</Link>
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
