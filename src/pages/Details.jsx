
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { BorderType } from "../components/utils/border";
import { bgByType } from "../components/utils/colortype";
const Details = () => {

 const [initial,setInicial] = useState(null)

/*Funcion que nos ayuda a capturar los parametros por id */
  const {pokeid} = useParams();

  /*Consulta por select */
 useEffect( ()=>{
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeid}/`)
    .then( ({data}) => setInicial(data)) 
    .catch( (err)=> console.log(err))
  
 },[])
 
const getPercentajeStat = ( statValue )=>{
  const MAX_STAT_VALUE =255;
  const percentStat = (( statValue * 100) / MAX_STAT_VALUE).toFixed(1);
   return `${percentStat}%`;
}

  return (
    
   
    <main className="min-h-screen flex items-center justify-center bg-[#e0e5ec] p-6">
  <article className="
    w-full max-w-3xl
    rounded-3xl
    bg-white/40
    backdrop-blur-xl
    shadow-[12px_12px_24px_#c8ccd2,-12px_-12px_24px_#ffffff]
    overflow-hidden
    relative
  ">
    
    {/* Fondo tipo energía */}
    <div className={`h-40 ${bgByType[initial?.types[0].type.name]} opacity-70`} />

    {/* Imagen flotante */}
    <div className="flex justify-center -mt-24 relative z-10">
      <img
        src={initial?.sprites.other["official-artwork"].front_default}
        alt={initial?.name}
        className="w-56 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
      />
    </div>

    <div className="p-8 text-center">
      <p className="text-sm text-slate-500">#{initial?.id}</p>
      <h2 className="text-3xl font-bold capitalize tracking-wide">
        {initial?.name}
      </h2>

      {/* Tipos */}
      <div className="flex justify-center gap-3 mt-4">
        {initial?.types.map((type) => (
          <span
            key={type.type.name}
            className={`
              px-4 py-1 text-sm font-medium rounded-full
              ${bgByType[type.type.name]}
              shadow-md
            `}
          >
            {type.type.name}
          </span>
        ))}
      </div>

      {/* Stats */}
      <section className="mt-8 text-left">
        <h3 className="font-semibold mb-4 text-slate-700">Stats</h3>

        <ul className="space-y-4">
          {initial?.stats.map((stat) => (
            <li key={stat.stat.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="capitalize">{stat.stat.name}</span>
                <span>{stat.base_stat}/255</span>
              </div>

              {/* Barra futurista */}
              <div className="h-3 rounded-full bg-white/50 overflow-hidden shadow-inner">
                <div
                  style={{ width: getPercentajeStat(stat.base_stat) }}
                  className="
                    h-3 rounded-full
                    bg-gradient-to-r from-cyan-400 to-blue-500
                    shadow-[0_0_12px_rgba(59,130,246,0.7)]
                    transition-all duration-700
                  "
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </article>
</main>
       
  )
}
export default Details
