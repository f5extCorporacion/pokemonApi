import Home from './pages/Home';
import Pokemos from './pages/Pokemos';
import Details from './pages/Details';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RoutesPrivate from './components/rutasProtegidas/RoutesPrivate';

function App() {
  return (
    <main className="min-h-screen bg-[#e0e5ec]">

      <Routes>

        {/* Home pantalla completa */}
        <Route path='/' element={<Home />} />

        {/* Layout con container para rutas privadas */}
        <Route element={<RoutesPrivate />}>
          <Route
            element={
              <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
                <Outlet />
              </div>
            }
          >
            <Route path='/pokemons' element={<Pokemos />} />
            <Route path='/details/:pokeid' element={<Details />} />
          </Route>
        </Route>

      </Routes>

    </main>
  );
}

export default App;
