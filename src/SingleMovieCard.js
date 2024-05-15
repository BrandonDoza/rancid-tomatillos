import "./SingleMovieCard.css";
import PropTypes from 'prop-types';

export function SingleMovieDisplay({singleMovieData, setSingleMovie}) {
  const movie =  (
              <SingleMovieCard
              id={singleMovieData.id}
              key={singleMovieData.id}
              title={singleMovieData.title}
              posterPath={singleMovieData.poster_path}
              backdropPath={singleMovieData.backdrop_path}
              releaseDate={singleMovieData.release_date}
              overview={singleMovieData.overview}
              budget={singleMovieData.budget}
              revenue={singleMovieData.revenue}
              runtime={singleMovieData.runtime}
              tagline={singleMovieData.tagline}
              setSingleMovie={setSingleMovie}
              />
          )
          return (
              <div>{movie}</div>
          )
}


export default function SingleMovieCard({
  title,
  posterPath,
  backdropPath,
  releaseDate,
  overview,
  budget,
  revenue,
  runtime,
  tagline,
  setSingleMovie,
}) {
  return (
    <div className="movie-detail-card">
      <h1 className="single-movie-title">{title}</h1>
      <h3 className="tagline">"{tagline}"</h3>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${backdropPath})`}}
      >
        <img src={posterPath} alt={title} className="single-movie-poster" />
      </div>
      <h4 className="release-date">released: {releaseDate}</h4>
      <p className="overview">{overview}</p>
      <p className="budget">budget: ${budget}</p>
      <p className="revenue">revenue: ${revenue}</p>
      <p className="runtime">runtime: {runtime} minutes</p>
      <button onClick={() => setSingleMovie(null)} className="button">
        View All Movies
      </button>
    </div>
  );
}



SingleMovieCard.propTypes = {
  title: PropTypes.string,
  posterPath: PropTypes.string,
  backdropPath: PropTypes.string,
  releaseDate: PropTypes.string,
  overview: PropTypes.string,
  budget: PropTypes.string,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  tagline: PropTypes.string,
  setSingleMovie: PropTypes.func,
}
