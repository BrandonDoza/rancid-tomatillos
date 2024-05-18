import logo from "./logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Error from "../Error/Error";
import SingleMovieCard from "../SingleMovieCard/SingleMovieCard";
import { useEffect, useState } from "react";
import { getAllMovieData, getMovieDetail } from "../../ApiCalls";
import { Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState(null);
  useEffect(() => {
    getAllMovieData()
      .then((data) => setMovies(data.movies))
      .catch((error) => alert(`${error} please try again later`));
  }, []);

  return (
    <div className="App">
      <Header className="header" />
      <Routes>
        <Route path="/" element={<Movies movieData={movies} />} />
        <Route path="/movies/:id" element={<SingleMovieCard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
