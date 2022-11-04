import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

function BookProgress(book_id) {
  let navigate = useNavigate();
  const [pagesRead, setPagesRead] = useState({});

  const updateProgress = () => {
    axios({
      method: "POST",
      data: {
        book: book_id,
        pagesRead: pagesRead,
      },
      withCredentials: true,
      url: "http://localhost:3001/collections/updateProgress",
    })
      .then((res) => {
        if (res.error_msg) {
          console.log(book_id);
        } else {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <fieldset>
        <label className="m-3">Pages Read:</label>
        <input required onChange={(e) => setPagesRead(e.target.value)}></input>
        <button onClick={updateProgress} className="btn btn-primary btn-sm">
          Submit
        </button>
      </fieldset>
    </div>
  );
}

export default BookProgress;
