import React, { useState, useEffect } from "react";
import axios from "axios";

// backend Flask URL with it's PORT number
const URL = "http://localhost:6060/"

function App() {

  const [backendResponse, setBackendResponse] = useState({});

  // onMount
  useEffect(() => {
    axios.get(URL)
      .then(response => {
        console.log("Fetched Successfully...");
        setBackendResponse(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="App">
      <h1 id="heading">React-Flask Template</h1>
      {backendResponse.status===200?
      <p className="success">{backendResponse.data.info}</p>:
      <p className="error">Error! Please check console for more details...</p>
      }
    </div>
  );
}

export default App;
