import Movie  from "../models/Movie"
import {Genre} from "../services/movieService"

// Definir el tipo de datos que recibo de la API
export interface MovieData {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }    
  /**
 * Transformar los datos de la API en un objeto Movie.
 *
 * @param data - Datos de película de la API.
 * @param genresNames - Mapa de IDs de géneros a nombres de géneros.
 * @returns Un objeto Movie con los datos transformados.
 */

  export function formatMovie(data: any, genresNames: Map<number, string>): Movie {
    const movie: Movie = {
      id: data.id,
      title: data.title,
      year: data.release_date ? data.release_date.slice(0, 4) : "", // Extrae el año de la fecha de lanzamiento
      posterPath: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : "", // Forma la URL del póster
      genres: data.genre_ids ? data.genre_ids.map((n: number) => genresNames.get(n) || "Unknown") : [], // Mapea los IDs de géneros a nombres
      overview: data.overview,
      voteAverage: data.vote_average,
      voteCount: data.vote_count
    };
    return movie;
  }

  export function formatGenresToMap(data: Genre[]) {
    const genreMap = new Map();
    data.map((el: Genre) => {
        genreMap.set(el.id, el.name);
    });
    return genreMap;
  }
