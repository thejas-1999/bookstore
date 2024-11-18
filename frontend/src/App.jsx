import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:5555/api/books")
      .then((response) => console.log(response));
  }, []);
  return (
    <>
      <h1>Simple program to test cors</h1>
    </>
  );
}

export default App;
