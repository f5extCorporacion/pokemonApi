 
 
import pokemon from'./../assets/pokemon.png';
import { useQuestion } from '../Store/Reduxindex';
import shallow from 'zustand/shallow';
import { useNavigate } from 'react-router-dom';

 const Home = () => {
  const navigate = useNavigate();
  const {name}= useQuestion( (state)=>({
   name:state.name,
   
  }),shallow);
  const { newname }= useQuestion();

  /*Sacamos las pripiedades del store global */
 /*Envio de evento */
  const Handlesubmit =(e)=>{
    e.preventDefault();
    console.log(e.target.nombre.value);
    newname(e.target.nombre.value,true);
    navigate("/pokemons");
  }
   return (
    <div className="home">
    <article className='flex justify-center items-center flex-col'>

            <img src={pokemon} alt="" />
            <h1 className='text-red-500 text-[30px]'>  ¡Hola entrenador ! {name}</h1>
            <dfn>Para poder comenzar, dame tu {name}</dfn>
                {/*Debemos enviar datos  por evento a Handlesubmit */}
                <form onSubmit={Handlesubmit} className='flex w-auto gap-2 flex-wrap flex-row'>
                    <input type="text" id='nombre' required name="nombre"  className=' border shadow-xl p-5  text-slate-400  w-60' placeholder='Tu nombre'/>
                    <button type='submit' className='bg-red-500 text-white text-[20px] p-5 rounded-lg w-40'>Start</button>
                </form>
                
    </article>
    </div>
   )
 }
 export default Home