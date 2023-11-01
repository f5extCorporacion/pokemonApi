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
     <Barra/>
    <div className="pokemosGlobal">

      <section className="headerPokemons">
       <span><b className=" text-red-600">Bienvenido {name} </b>  Aqui podrias encontrar tu poquemon favorito.</span>

            <form onSubmit={SubmitHadle} className="fromData">
             
                    <input type="text" name="busque" placeholder="tu pokemon" />     
                    <button type="submit">Buscar</button>
              

              <select className="capitalize" onChange={change} >
                <option value=""> All pokemons</option>
                {
                  typess.map((type)=><option value={type.name} key={type.url}> {type.name}</option>)
                }
              </select>
              
            </form>
            <br />
      </section>

   <ul className="flex gap-5  p-5 justify-center items-center">
    <li>
      <button  onClick={HandlePrev}> {"<"} </button>
    </li>
    {
      pageinCurrentBlock.map((page)=>(
         <li key={page}
         onClick={()=> setCurrentPage(page)}
         className={`p-4 text-white font-bold  ${currentpage === page? "bg-slate-500" : "bg-slate-200"}`}>
          <button>  {page}</button>
         </li>))
    }
    
    <li>
      <button onClick={HandleNext}> {">"} </button>
    </li>
   </ul>
      <PokemoList pokemosProp={itemInCurrentPage}/>
      
    </div>
    </>
  )
}
export default Pokemos;