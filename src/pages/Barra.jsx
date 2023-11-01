import menu from'./../assets/menu.png';
import pokemon from'./../assets/pokemon.png';


const Barra = () => {

  return (
    <nav className="abolute">
        <img src={menu} alt="" />
        <img src={pokemon} alt=""  className=' pokedex relative -translate-y-[100px] w-[300px]'/>

      </nav>
  )
}
export default Barra