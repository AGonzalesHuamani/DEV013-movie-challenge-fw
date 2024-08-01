import { Movie } from "../models/Movie";
import { MovieCard } from "./MovieCard";

interface MovieList {
  movies: Movie[];
}

export function MovieList({ movies }: MovieList) {
  return (
    <div className="containerlist">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}
