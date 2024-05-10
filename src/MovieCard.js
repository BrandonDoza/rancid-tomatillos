import "./MovieCard.css"

export default function MovieCard({title, posterPath, rating}){
    return(
        <div className="movie-card">
            <h1 className="movie-title">{title}</h1>
            <img src={posterPath} className="movie-poster"/>
            <h2 className="rating">{rating.toFixed(1)}</h2>
        </div>
    )
}