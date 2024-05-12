import "./SingleMovieCard.css"

export default function SingleMovieCard({title, posterPath, backdropPath,
    releaseDate, overview, budget, revenue, runtime, tagline, setSingleMovie}) {
        return (
            <div className="movie-detail-card">
                <h1 className="movie-title">{title}</h1>
                <div>
                <img src={posterPath} alt={title} className="movie-poster"/>
                {/* <img src={backdropPath} className="movie-poster"/> */}
                </div>

                <h4 className="release-date">{releaseDate}</h4>
                <p className="overview">{overview}</p>
                <p className="budget">budget: {budget}</p>
                <p className="revenue">revenue: {revenue}</p>
                <p className="runtime">runtime: {runtime} minutes</p>
                <p className="tagline">{tagline}</p>
                <button onClick={()=> setSingleMovie(null)} className="button">View All Movies</button>
            </div>
        )
    }