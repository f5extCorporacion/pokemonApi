
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Barra from'./Barra';
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
    <>
    <Barra/>
    <main className=" text-center justify-center items-center ">
      
       <article className={`max-w-[80%] mx-auto  border-solid border-4 ${BorderType[[initial?.types[0].type.name]]} rounded-xl`}>
       <div className={` z-0 w-[100%] h-[140px] ${bgByType[[initial?.types[0].type.name]]} `}></div>

        <header className="headerDetail" >
        <img src={initial?.sprites.other["official-artwork"].front_default} alt=""  />
        </header><br /> <br /> <br />

           <h3> #{initial?.id} </h3>
           <h2 className="capitalize font-semibold"> {initial?.name} <hr /> </h2>
           
           {/*Tipo */}
           <div className="tiposH flex p-10 gap-2">
           
                        <div className="tipo gap-2 roun">
                        {initial?.types.map((type) =>
                         //type.type.name
                      <button className={`${bgByType[initial?.types[0].type.name]} rounded-lg text-white p-2 `}>{type.type.name} </button>
                         )}
                    </div>
                      <div className="habilidades gap-2">
                        
                      <button className=" p-2 border-solid border border-1 border-slate-900 rounded-lg">✌</button>
                        <button className=" p-2 border-solid border border-1 border-slate-900 rounded-lg">⚡</button>
                      </div>
           </div>
           {/**Stacks */}
           <section className="p-12">
            <h3 className="text-start"> Stats</h3>
            <ul className=" grid gap-3">
              {
               initial?.stats.map((stat)=>
                <li key={stat.stat.name}>
                  <div className=" flex justify-between">
                    <h5> {stat.stat.name}</h5>
                    <span>{stat.base_stat}/255</span>
                  </div>
                    {/**total bar */}
                  <div className=" bg-slate-200 rounded-lg h-6">
                    {/**Barra porcentahe */}
                  <div style={{ width: getPercentajeStat(stat.base_stat)}} className=" bg-yellow-400 h-6 w-[50%]"></div>
                  </div>
                </li>)
              }
            </ul>
           </section>
       </article>
       </main>
       </>
  )
}
export default Details