import {Movie}  from "../models/Movie"
import {Genre} from "../services/movieService"


export function formatMovie(
  apiMovieData: any,
  moviesGenres: Map<number, string>
): Movie {
  return {
    id: apiMovieData.id,
    title: apiMovieData.title,
    poster: apiMovieData.poster_path,
    year: apiMovieData.release_date,
    overview: apiMovieData.overview,
    rating: apiMovieData.vote_average,
    genres:
      apiMovieData.genre_ids?.map((genre_id:any) => moviesGenres.get(genre_id)) ||
      apiMovieData.genres.map((genre_id:any) => moviesGenres.get(genre_id)),
  };
}
  export function formatGenresToMap(data: Genre[]) {
    const genreMap = new Map();
    data.map((el: Genre) => {
        genreMap.set(el.id, el.name);
    });
    return genreMap;
  }
