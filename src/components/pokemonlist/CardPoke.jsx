import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { bgByType } from "../utils/colortype";
import { BorderType} from "../utils/border";


const CardPoke =({pokemonLink} )=>{
  const [completo  , setCompleto] = useState(null)

   useEffect(()=>{
      axios
      .get(pokemonLink)
      .then( ({data})=>{setCompleto(data); })
      .catch((err)=>console.log(err))  
   },[])

   const Type = completo?.types.map((type) =>type.type.name).join(" / ");
 return(
    <Link to={`/details/${completo?.id}`} className={`cardGlobal ${BorderType[completo?.types[0].type.name]} bg-white  rounded-xl capitalize`}>
     
     <div className={` z-0 w-[100%] h-[140px] ${bgByType[completo?.types[0].type.name]} `}></div>

      <div className="absolute -translate-y-1/3"> 
      <img src={completo?.sprites.other["official-artwork"].front_default} alt="" className="w-[200px] w-auto justify-center items-center" />
      </div>  <br /><br /><br /><br />
      <h3 className="text-xl font-semibold"> {completo?.species.name}</h3>
      <span> {completo?.types.map((type) =>type.type.name).join(" / ")} </span>
       <h5 className=" font-semibold text-slate-400 text-xs">type</h5>

       <ul className="types grid  gap-3 grid-cols-2 text-sm">
         {completo?.stats.slice(0 , 4).map( (stat)=>(

         <li className=" grid gap-1" key={stat.stat.name}>
         <h6 className=" font-semibold text-slate-400 text-xs"> {stat.stat.name} </h6>
         <span> {stat.base_stat}</span>
         </li>
         ))}
       </ul>

    </Link>
 )
}
export default CardPoke;