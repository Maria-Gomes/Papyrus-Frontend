import { useLocation } from "react-router-dom";
import axios from "axios";

function SearchResult() {
  const { state } = useLocation();
  const { results } = state;
  const searchResults = results.docs.map((item) => {
    if (item) {
      return (
        <div key={item.key}>
          <h3>{item.title}</h3>
          <h4>{item.author_name[0] || "Author not found."}</h4>
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
