import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MoviesContext } from "../../contexts/contextMovies"; // Certifique-se de que o caminho está correto

interface Movie {
  id: number;
  title: string;
}

const Movies = () => {
  // Acessando o contexto apenas uma vez
  const moviesContext = useContext(MoviesContext);

  if (!moviesContext) {
    throw new Error("MoviesContext deve ser usado dentro de um MoviesProvider");
  }

  const { setMoviesCount } = moviesContext; // Desestruturando a função do contexto
  const [movies, setMovies] = useState<Movie[]>([]); // Estado para armazenar os filmes

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

        setMovies(res.data.results || []); // Armazenando os filmes
        setMoviesCount(res.data.results ? res.data.results.length : 0); // Atualizando a contagem de filmes
      } catch (err) {
        console.error("Erro ao carregar filmes:", err);
      }
    };

    getMovies();
  }, [setMoviesCount]); // O useEffect depende de 'setMoviesCount'

  return (
    <ul>
      {movies.length > 0 ? (
        movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
      ) : (
        <li>Nenhum filme encontrado.</li>
      )}
    </ul>
  );
};

export default Movies;
