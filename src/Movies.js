import MovieCard from "./MovieCard"
import "./Movies.css"

export default function Movies({movieData, getMovieDetail, setSingleMovie}){
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
        setSingleMovie={setSingleMovie}
        />
    )})

    return(
        <div className="movies-display">
            {movieCards}
        </div>
    )
}

// Movies.propTypes = {
//     movieData: PropTypes.arrayOf()
// }
