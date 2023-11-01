import CardPoke from "./CardPoke"
import './../../App.css';
const PokemoList = ({pokemosProp}) => {
  return (
    <div className="ListaPokemons" >
        {
            pokemosProp.map( (poke)=><CardPoke key={poke.url} pokemonLink={poke.url}  />)
        }
    </div>
  )
}
export default PokemoList