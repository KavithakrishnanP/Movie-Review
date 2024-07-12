import {Movie} from "./Movie";
import Welcome from "./Welcome";

export function MovieList({ movies }) {
  return (
    <>
      <Welcome />
      <section className="movie-list">
        {movies && Array.isArray(movies) && movies.map((movie, index) => (
          <Movie
            key={index}
            name={movie?.name}
            poster={movie?.poster}
            rating={movie?.rating}
            summary={movie?.summary}
            trailer={movie?.trailer}
            id={index}
            
          />
        ))}
      </section>
    </>
  );
}
