import { MoviesProvider } from "./contexts/contextMovies";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-zinc-900">
      <MoviesProvider>
        <Home />
      </MoviesProvider>
    </div>
  );
};

export default App;
