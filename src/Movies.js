import MovieCard from "./MovieCard"
import "./Movies.css"
// import SingleMovieCard from "./SingleMovieCard"

export default function Movies({movieData, getMovieDetail}){
    const movieCards = movieData.map(movie => {
        return (
        <MovieCard 
        title={movie.title}
        id={movie.id}
        key={movie.id}
        posterPath={movie.poster_path}
        backdropPath={movie.backdrop_path}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
        getMovieDetail={getMovieDetail}
        />
    )})

    // console.log(movieData, '<<>>>>>')

    return(
        <div className="movies-display">
            {/* {movieData.length === 1 ? movieCard : movieCards} */}
            {movieCards}
        </div>
    )
}

// {"movie": {id: 1, 
//     title: "Fake Movie Title", 
//     poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
//     backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
//     release_date: "2019-12-04", 
//     overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], 
//     budget:63000000, 
//     revenue:100853753, 
//     runtime:139, 
//     tagline: "It's a movie!" }}