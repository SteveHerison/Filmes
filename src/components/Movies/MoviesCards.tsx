import { Movie } from "../../types/Movies";
import StarRating from "./StarRating";
import { useState } from "react";

export interface Props {
  movie: Movie;
}

export default function MoviesCards(props: Props) {
  const imageUrlBase = "https://image.tmdb.org/t/p/original";
  const movie = props.movie;

  // Estado para controlar a exibição da visão geral
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`relative transition-transform duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="">
        <img
          src={`${imageUrlBase}${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover rounded-xl cursor-pointer"
        />
      </div>

      <div
        className={`absolute bottom-0 h-auto flex flex-col w-full  items-start bg-gradient-to-b from-zinc-900/50 to-zinc-800/80 p-2 rounded-b-xl transition-all duration-300 ${
          isHovered ? " opacity-100" : "opacity-100"
        }`}
      >
        <h2 className="text-white text-lg font-bold text-center">
          {movie.title}
        </h2>

        <StarRating rating={movie.vote_average} />

        {isHovered && (
          <div className="flex flex-col h-full  gap-2">
            <p className="text-white text-start mt-2 transition-opacity duration-300">
              {movie.overview.length > 100
                ? `${movie.overview.substring(0, 100)}...`
                : movie.overview}
            </p>
            <button className="w-full p-1  bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
              Ver mais
            </button>
          </div>
        )}
      </div>
    </li>
  );
}
