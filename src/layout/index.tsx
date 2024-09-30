import { ReactNode, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MoviesContext } from "../contexts/contextMovies";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const moviesContext = useContext(MoviesContext);

  if (!moviesContext) {
    throw new Error("MoviesContext deve ser usado dentro de um MoviesProvider");
  }

  const { moviesCount } = moviesContext;

  return (
    <main
      className="w-full h-screen flex flex-col text-white
     bg-gradient-to-b from-slate-900 from-80%  to-slate-600 "
    >
      <section className="flex flex-col w-full h-full px-10 ">
        <Header />
        <span>Quantidade de filmes: {moviesCount}</span>
        <section className="flex-1 w-full overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
          {children}
        </section>
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
