import "./SingleMovieCard.css";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetail } from "../../ApiCalls";
import { useState, useEffect } from "react";

export default function SingleMovieCard() {
  const [singleMovie, setSingleMovie] = useState({})
  let movieId = useParams().id
  const navigate = useNavigate()
  useEffect(() => {
    getMovieDetail(movieId)
  .then(data => setSingleMovie(data.movie))
  }, [])
  return (
    <div className="movie-detail-card">
      <h1 className="single-movie-title">{singleMovie.title}</h1>
      <h3 className="tagline">"{singleMovie.tagline}"</h3>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${singleMovie.backdrop_path})`}}
      >
        <img src={singleMovie.poster_path} alt={singleMovie.title} className="single-movie-poster" />
      </div>
      <h4 className="release-date">released: {singleMovie.release_date}</h4>
      <p className="overview">{singleMovie.overview}</p>
      <p className="budget">budget: ${singleMovie.budget}</p>
      <p className="revenue">revenue: ${singleMovie.revenue}</p>
      <p className="runtime">runtime: {singleMovie.runtime} minutes</p>
      <button onClick={() => navigate(-1)} className="button">
        View All Movies
      </button>
    </div>
  );
}
