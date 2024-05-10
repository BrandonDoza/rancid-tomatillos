import logo from './logo.svg';
import './App.css';
import movieData from "./movieData"
import Header from "./Header"
import Movies from "./Movies"
import { useState } from 'react';

function App() {

  const [movies, setMovies] = useState(movieData.movies)

  return (
    <div className="App">
      <Header className="header"/> 
      <Movies className="movies-display" movieData={movies}/>
    </div>
  );
}

export default App;
