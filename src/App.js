import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Movies from "./Movies"
import SingleMovieDisplay from './SingleMovieDisplay';
import { useEffect, useState } from 'react';
import { getAllMovieData, getMovieDetail } from './ApiCalls'   

function App() {

  const [movies, setMovies] = useState([])
  const [singleMovie, setSingleMovie] = useState(null)

  // function getAllMovieData(){
  //   fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  //   .then(response => response.json())
  //   .then(data => setMovies(data.movies))
  //   .catch(error => alert(`${error} please try again later`))
  // }

  // function getMovieDetail(id) {
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  //   .then(response => response.json())
  //   .then(data => setSingleMovie(data.movie))
  //   .catch(error => alert(`${error} sorry try again later`))
  // }

  console.log("movies", movies)
  console.log(singleMovie, "single")

  useEffect(()=> {
    getAllMovieData()
    .then(data => setMovies(data.movies))
    .catch(error => alert(`${error} please try again later`))
  }, [])

  

  return (
    <div className="App">
      <Header className="header"/> 
      {singleMovie ? <SingleMovieDisplay singleMovieData={singleMovie}/> : <Movies className="movies-display" movieData={movies} getMovieDetail={getMovieDetail} setSingleMovie={setSingleMovie}/>}
    </div>
  );
}

export default App;


// psuedocode for single movie
// need to use event.target.id to fetch the single movie
// need to make another state and component for single movie?
// need to conditionalyy render that component if that state is not an
// empty array? {singleMovieCardArray && <SingleMovieCard />} ???
// const [movie, setMovie] = useState([])????
// function showSingleMovie() {setMovie() }????
// setSingleMovie back to [] when a user clicks the back button

