import "./MovieCard.css"
import PropTypes from 'prop-types'

export default function MovieCard({title, posterPath, rating, id}){
    return(
        <div className="movie-card">
            <h1 className="movie-title">{title}</h1>
            <img src={posterPath} alt={title} className="movie-poster" 
            id={id}/>
            <h2 className="rating">rating: {rating}</h2>
        </div>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string,
    posterPath: PropTypes.string,
    rating: PropTypes.number,
    getMovieDetail: PropTypes.func,
    id: PropTypes.number,
    setSingleMovie: PropTypes.func
}

