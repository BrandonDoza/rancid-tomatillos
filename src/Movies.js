import MovieCard from "./MovieCard";
import "./Movies.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movies({ movieData }) {
  const movieCards = movieData.map((movie) => {
    return (
      <Link to={`/${movie.id}`} key={movie.id}>
        <MovieCard
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          backdropPath={movie.backdrop_path}
          rating={movie.average_rating}
          releaseDate={movie.release_date}
        />
      </Link>
    );
  });

  return <div className="movies-display">{movieCards}</div>;
}

Movies.propTypes = {
  movieData: PropTypes.array,
  getMovieDetail: PropTypes.func,
  setSingleMovie: PropTypes.func,
};
