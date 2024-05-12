import "./SingleMovieCard.css";

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
