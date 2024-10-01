import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MoviesContext } from "../../contexts/contextMovies"; // Certifique-se de que o caminho está correto
import MoviesCards from "./MoviesCards";
import { Movie } from "../../types/Movies";

const Movies = () => {
  const moviesContext = useContext(MoviesContext);

  if (!moviesContext) {
    throw new Error("MoviesContext deve ser usado dentro de um MoviesProvider");
  }

  const { setMoviesCount } = moviesContext;
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "688a61fd301381e58307f7b2028291ca",
              language: "pt-BR",
            },
          }
        );
        if (res.status === 200) {
          setMovies(res.data.results || []);
          setMoviesCount(res.data.results ? res.data.results.length : 0);
        } else {
          console.error(`Erro: status ${res.status}`);
        }
      } catch (err) {
        console.error("Erro ao carregar filmes:", err);
      }
    };
    getMovies();
  }, [setMoviesCount]);

  return (
    <ul className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
      {movies.map((movie) => (
        <MoviesCards key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default Movies;
