import { Movie } from "../models/Movie";
import { apiKey } from "../utils/getEnv";

export interface Results {
  movies: Movie[];
}

export const getMovie = async (): Promise<Results> => {
  const apiKeyP = apiKey();
  const url=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKeyP}`;
  console.log("API Key:", apiKeyP);
  console.log("Fetch URL:", url);
  const response = await fetch(url,{
      headers: {
        "Authorization": `Bearer ${apiKeyP}`,
      },
    }
  );
  if (!response.ok){
    throw new Error("Solicitud no exitosa")
  }
  const data = await response.json();

  const movies = data.results.map((item: any) => ({
    id: item.id,
    title: item.title,
    year: item.release_date.split("-")[0],
    genre: item.genre_ids.join(", "), // Adaptar esto según cómo se obtienen los géneros
    poster: item.poster_path,
  }));

  return { movies };

};
