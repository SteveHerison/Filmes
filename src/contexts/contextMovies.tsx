import { createContext, useState, ReactNode } from "react";

interface MoviesContextProps {
  moviesCount: number;
  setMoviesCount: (count: number) => void;
}

export const MoviesContext = createContext<MoviesContextProps | undefined>(
  undefined
);

export const MoviesProvider = ({ children }: { children: ReactNode }) => {
  const [moviesCount, setMoviesCount] = useState(0);

  return (
    <MoviesContext.Provider value={{ moviesCount, setMoviesCount }}>
      {children}
    </MoviesContext.Provider>
  );
};
