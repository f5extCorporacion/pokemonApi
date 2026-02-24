 import { useEffect, useState } from "react";
import { useQuestion } from "../Store/Reduxindex";
import axios, { AxiosError } from "axios";
import PokemoList from "../components/pokemonlist/PokemoList";
import Barra from'./Barra';
import { pagination } from "../components/utils/pagination";
const Pokemos = () => {
 const name = useQuestion((state)=> state.name)
const url = 'https://pokeapi.co/api/v2/pokemon?limit=1294';
const urll = 'https://pokeapi.co/api/v2/type';
/*Aqui estan todos los poquemons */
const [pokemosData , setPokemosData] = useState([]);
const [pokemonNameby , setPokemonNameby] = useState("");
const [typess , setTypess] = useState([]);
const [currenttype , setCurrentType] = useState("");
 const [currentpage , setCurrentPage] = useState(1);
/*Function consulta pokemons */
const consulta = pokemosData.filter( (pokemon)=> pokemon.name.includes(pokemonNameby))
/*Para buscar El pokemon */ 

//Paginacion

const { pageinCurrentBlock, itemInCurrentPage, lastpage} = pagination(consulta,currentpage);
 
  const SubmitHadle =(e)=>{
    e.preventDefault();
  setPokemonNameby(e.target.busque.value.toLowerCase().trim());
  }

  

/*Consulta todos los pokemons */
 useEffect( ()=>{
  if(currenttype ===""){
    axios
  .get(url)
  .then( ({data})=>{ setPokemosData(data.results)})
  .catch((err)=>console.log(err))
  }
 },[])

/*Actualiza los types trae la info de la api y guarda en  setTypes estado */
 useEffect( ()=>{
  axios
  .get(urll)
  .then( ({data})=>{setTypess(data.results)})
  .catch((err)=>console.log(err))
 },[])

 /*Evento del current type */
 const change=(e)=>{
  e.preventDefault();
  setCurrentType(e.target.value);
  
 }

/*Consulta por select */
 useEffect( ()=>{
  if(currenttype !=''){
    axios
    .get(`https://pokeapi.co/api/v2/type/${currenttype}/`)
    .then( ({data}) => setPokemosData( data.pokemon.map( (pokemon)=> pokemon.pokemon)) )
    .catch( (err)=> console.log(err))
  }
 },[currenttype ])

 //Next del buttom
const HandleNext = () =>{
 const newCurrenPage = currentpage + 1;
 if(newCurrenPage <= lastpage){ setCurrentPage(newCurrenPage);
 }
}
//Prev del buttom
const HandlePrev = () =>{
  const newCurrenPage = currentpage - 1;
  if(newCurrenPage >= 1){
    setCurrentPage(newCurrenPage)
  }
}

useEffect(()=>{
  setCurrentPage(1)
},[currenttype])

  return (
  <>
  <Barra />

  <div className="min-h-screen bg-[#e0e5ec] py-10 px-5">

    <div className="max-w-6xl mx-auto">

      {/* CONTENEDOR PRINCIPAL NEUMORPH */}
      <section className="p-10 rounded-3xl bg-[#e0e5ec]
                          shadow-[8px_8px_16px_#bec3c9,
                                  -8px_-8px_16px_#ffffff]">

        {/* HEADER */}
        <div className="flex flex-col gap-6">

          <span className="text-lg text-gray-700">
            <b className="text-red-500">Bienvenido {name}</b>  
            <span className="ml-2 text-gray-600">
              Aquí podrás encontrar tu Pokémon favorito.
            </span>
          </span>

          {/* FORM NEUMORPH */}
          <form 
            onSubmit={SubmitHadle} 
            className="flex flex-wrap gap-5 items-center"
          >

            {/* INPUT */}
            <input
              type="text"
              name="busque"
              placeholder="Buscar Pokémon..."
              className="px-6 py-3 rounded-xl bg-[#e0e5ec]
                         shadow-[inset_6px_6px_10px_#bec3c9,
                                 inset_-6px_-6px_10px_#ffffff]
                         focus:outline-none
                         text-gray-700 w-60"
            />

            {/* BOTON */}
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#e0e5ec]
                         shadow-[6px_6px_10px_#bec3c9,
                                 -6px_-6px_10px_#ffffff]
                         active:shadow-[inset_6px_6px_10px_#bec3c9,
                                        inset_-6px_-6px_10px_#ffffff]
                         transition-all"
            >
              Buscar
            </button>

            {/* SELECT */}
            <select
              onChange={change}
              className="capitalize px-6 py-3 rounded-xl bg-[#e0e5ec]
                         shadow-[inset_6px_6px_10px_#bec3c9,
                                 inset_-6px_-6px_10px_#ffffff]
                         focus:outline-none text-gray-700"
            >
              <option value="">All Pokemons</option>
              {typess.map((type) => (
                <option value={type.name} key={type.url}>
                  {type.name}
                </option>
              ))}
            </select>

          </form>

        </div>
      </section>

      {/* PAGINACION NEUMORPH */}
      <ul className="flex gap-4 p-8 justify-center items-center flex-wrap">

        {/* PREV */}
        <li>
          <button
            onClick={HandlePrev}
            className="w-12 h-12 rounded-xl bg-[#e0e5ec]
                       shadow-[6px_6px_10px_#bec3c9,
                               -6px_-6px_10px_#ffffff]
                       active:shadow-[inset_6px_6px_10px_#bec3c9,
                                      inset_-6px_-6px_10px_#ffffff]"
          >
            {"<"}
          </button>
        </li>

        {pageinCurrentBlock.map((page) => (
          <li key={page}>
            <button
              onClick={() => setCurrentPage(page)}
              className={`w-12 h-12 rounded-xl font-bold transition-all
              ${
                currentpage === page
                  ? "bg-[#e0e5ec] shadow-[inset_6px_6px_10px_#bec3c9,inset_-6px_-6px_10px_#ffffff]"
                  : "bg-[#e0e5ec] shadow-[6px_6px_10px_#bec3c9,-6px_-6px_10px_#ffffff]"
              }`}
            >
              {page}
            </button>
          </li>
        ))}

        {/* NEXT */}
        <li>
          <button
            onClick={HandleNext}
            className="w-12 h-12 rounded-xl bg-[#e0e5ec]
                       shadow-[6px_6px_10px_#bec3c9,
                               -6px_-6px_10px_#ffffff]
                       active:shadow-[inset_6px_6px_10px_#bec3c9,
                                      inset_-6px_-6px_10px_#ffffff]"
          >
            {">"}
          </button>
        </li>

      </ul>

      {/* LISTA */}
      <div className="mt-6">
        <PokemoList pokemosProp={itemInCurrentPage} />
      </div>

    </div>
  </div>
</>
  )
}
export default Pokemos;
