import {Movie} from "../models/Movie";

interface MovieCardProps {
 movie:Movie;
}

export function MovieCard({movie}: MovieCardProps) {
  return (
    <div className="movieClassContainer">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
      <h3 className="tittleName">{movie.title}</h3>
      <p className="pName">{movie.year}</p>
      <p className="pGenre">{movie.poster}</p>
    </div>
  );
}

