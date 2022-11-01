import { useParams } from "react-router-dom";

function BookDetails() {
  let { key } = useParams();
  return (
    <div>
      <h3>Book Detail page with key {key}</h3>
    </div>
  );
}

export default BookDetails;
