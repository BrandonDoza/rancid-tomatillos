import "./MovieCard.css"

export default function MovieCard({title, posterPath, rating, getMovieDetail, id}){
    return(
        <div className="movie-card" id={id} onClick={e => getMovieDetail(e.target.id)}>
            <h1 className="movie-title">{title}</h1>
            <img src={posterPath} className="movie-poster"/>
            <h2 className="rating">{rating}</h2>
        </div>
    )
}