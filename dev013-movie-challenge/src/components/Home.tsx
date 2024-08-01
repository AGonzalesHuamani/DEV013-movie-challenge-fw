import { useState, useEffect } from "react";
import Header from './Header'
import Menu from './Menu'
import {MovieList} from './MovieList'
import {Movie} from '../models/Movie'
// import {Results} from '../services/APIService'
import { getMovie } from "../services/APIService"

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const allMovie = await getMovie();
        // console.log(allMovie.movies)
        setMovies(allMovie.movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
      
    };
    fetchMovies();
  },[])
  if (loading) {
    return <p>Cargando...</p>;
  }



  return (
    <div>
      <Header />
      <Menu />
      <MovieList movies={movies}/>
    </div>
  );
};


export default Home;
