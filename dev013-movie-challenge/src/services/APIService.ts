import { Movie } from "../models/Movie";
import { apiKey } from "../utils/getEnv";
import { formatMovie, formatGenresToMap } from "../utils/transformers";

export interface Results {
  movies: Movie[];
}
export interface Genre {
  id: number;
  name: string;
}

export const getMovie = async (): Promise<Results> => {
  const apiKeyP = apiKey();
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKeyP}`;
  console.log("API Key:", apiKeyP);
  console.log("Fetch URL:", url);
  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${apiKeyP}`,
    },
  });
  if (!response.ok) {
    throw new Error("Solicitud no exitosa");
  }
  const data = await response.json();

  const genres = data.genres || [];
  const genresMap = formatGenresToMap(genres);

  // Usar la función formatMovie para formatear los datos de las películas
  const movies = data.results.map((item: any) => formatMovie(item, genresMap));

  return { movies };
};