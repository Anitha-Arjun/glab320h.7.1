import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  // Variable with your API Key
  const apiKey = "6f09aa35";
  // State to hold movie data
  const [movie, setMovie] = useState(null);
  // Function to get movies
  const getMovie = async (searchTerm) => {
    try {
      // Make fetch request and store the response
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      console.log(data);
      // Set the Movie state to the received data
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie();
  }, []);

  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <>
      <div className="App">
        <MovieDisplay movie={movie} />
        <Form movieSearch={getMovie} />
      </div>
    </>
  );
}

export default App;
