import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Movies from "./Movies"
import SingleMovieDisplay from './SingleMovieDisplay';
import { useEffect, useState } from 'react';
import { getAllMovieData, getMovieDetail } from './ApiCalls'


const dummyMovie =  {id: 1, 
    title: "Fake Movie Title", 
    poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
    backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
    release_date: "2019-12-04", 
    overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], 
    budget:63000000, 
    revenue:100853753, 
    runtime:139, 
    tagline: "It's a movie!" }

    

    // console.log('dummy', title)

function App() {

  const [movies, setMovies] = useState([])
  const [singleMovie, setSingleMovie] = useState(null)

  function getAllMovieData(){
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setMovies(data.movies))
    .catch(error => alert(`${error} please try again later`))
  }

  function getMovieDetail(id) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => setSingleMovie(data.movie))
    .catch(error => alert(`${error} sorry try again later`))
  }

  console.log("movies", movies)
  console.log(singleMovie, "single")

  useEffect(()=> {
    getAllMovieData()
    
  }, [])

  

  return (
    <div className="App">
      <Header className="header"/> 
      {singleMovie ? <SingleMovieDisplay singleMovieData={singleMovie}/> : <Movies className="movies-display" movieData={movies} getMovieDetail={getMovieDetail}/>}
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

