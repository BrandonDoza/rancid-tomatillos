import "./MovieCard.css"

export default function MovieCard({title, posterPath, rating, getMovieDetail, id, setSingleMovie}){
    return(
        <div className="movie-card" id={id} onClick={(e) => {
            getMovieDetail(e.target.id)
            .then((data) => {
                setSingleMovie(data.movie)})
            }}>
            <h1 className="movie-title">{title}</h1>
            <img src={posterPath} alt={title} className="movie-poster"/>
            <h2 className="rating">rating: {rating}</h2>
        </div>
    )
}