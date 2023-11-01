
import Home from'./pages/Home';
import Pokemos from './pages/Pokemos';
import Details from './pages/Details';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RoutesPrivate from './components/rutasProtegidas/RoutesPrivate';
import {Navigate , Outlet} from'react-dom';

function App() {

  //Store
 
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
            {/**Proteccion de Rutas */}
            <Route element={ <RoutesPrivate/> }>
                <Route path='/pokemons' element={<Pokemos/>} />
                <Route path='/details/:pokeid' element={<Details/>} />
            </Route>
            {/**Proteccion de Rutas */}
            {/*<Route path='*' element={<Home/> } />*/}
        </Routes>
      </main>
    </>
  )
}
export default App
