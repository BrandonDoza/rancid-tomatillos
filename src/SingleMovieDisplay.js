import SingleMovieCard from "./SingleMovieCard";

export default function SingleMovieDisplay({singleMovieData, setSingleMovie}) {
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