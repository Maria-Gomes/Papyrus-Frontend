import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CollectionForm() {
  let navigate = useNavigate();
  const [collectionName, setCollectionName] = useState({});

  const createCollection = () => {
    axios({
      method: "POST",
      data: {
        collection_name: collectionName,
      },
      withCredentials: true,
      url: "http://localhost:3001/collections/new",
    })
      .then((res) => {
        if (res.error_msg) {
          navigate("/createCollection");
        } else {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <fieldset>
        <label className="m-3">Collection Name</label>
        <input
          placeholder="My Collection"
          required
          onChange={(e) => setCollectionName(e.target.value)}
        ></input>
        <button onClick={createCollection} className="btn btn-primary btn-sm">
          Submit
        </button>
      </fieldset>
    </div>
  );
}

export default CollectionForm;
