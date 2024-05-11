import SingleMovieCard from "./SingleMovieCard";

export default function SingleMovieDisplay({movieData}) {
    const movie =  (
                <SingleMovieCard
                id={movieData.id}
                key={movieData.id}
                title={movieData.title}
                posterPath={movieData.poster_path}
                backdropPath={movieData.backdrop_path}
                releaseDate={movieData.release_date}
                overview={movieData.overview}
                budget={movieData.budget}
                revenue={movieData.revenue}
                runtime={movieData.runtime}
                tagline={movieData.tagline}
                />
            )
            return (
                <div>{movie}</div>
            )
}