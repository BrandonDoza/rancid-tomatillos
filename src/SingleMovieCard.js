import "./SingleMovieCard.css"

export default function SingleMovieCard({title, posterPath, backdropPath,
    releaseDate, overview, budget, revenue, runtime, tagline}) {
        return (
            <div className="movie-detail-card">
                <h1 className="movie-title">{title}</h1>
                <img src={posterPath} className="movie-poster"/>
                <img src={backdropPath} className="movie-poster"/>
                <h4>{releaseDate}</h4>
                <p>{overview}</p>
                <p>{budget}</p>
                <p>{revenue}</p>
                <p>{runtime}</p>
                <p>{tagline}</p>
            </div>
        )
    }