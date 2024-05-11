import "./MovieCard.css"

export default function MovieCard({title, posterPath, rating, getMovieDetail}){
    return(
        <div className="movie-card" onClick={getMovieDetail}>
            <h1 className="movie-title">{title}</h1>
            <img src={posterPath} className="movie-poster"/>
            <h2 className="rating">{rating}</h2>
        </div>
    )
}