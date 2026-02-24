import pokemon from './../assets/pokemon.png';
import { useQuestion } from '../Store/Reduxindex';
import shallow from 'zustand/shallow';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const { name } = useQuestion(
    (state) => ({
      name: state.name,
    }),
    shallow
  );

  const { newname } = useQuestion();

  const Handlesubmit = (e) => {
    e.preventDefault();
    newname(e.target.nombre.value, true);
    navigate("/pokemons");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      
      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/30 shadow-2xl rounded-3xl p-10 w-[90%] max-w-md border border-white/40">

        <article className="flex flex-col items-center gap-6">

          <img 
            src={pokemon} 
            alt="pokemon" 
            className="w-40 drop-shadow-xl"
          />

          <h1 className="text-2xl font-bold text-gray-800 text-center">
            ¡Hola entrenador! {name}
          </h1>

          <p className="text-gray-600 text-center">
            Para comenzar, escribe tu nombre
          </p>

          <form 
            onSubmit={Handlesubmit} 
            className="flex flex-col gap-4 w-full"
          >
            {/* Neumorph Input */}
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              placeholder="Tu nombre"
              className="px-6 py-4 rounded-xl bg-white/60 
                         shadow-[inset_4px_4px_10px_rgba(0,0,0,0.1),
                                 inset_-4px_-4px_10px_rgba(255,255,255,0.7)]
                         focus:outline-none focus:ring-2 focus:ring-purple-400
                         text-gray-700"
            />

            {/* Neumorph Button */}
            <button
              type="submit"
              className="py-4 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-purple-500 to-pink-500
                         shadow-lg
                         hover:scale-105 active:scale-95
                         transition-all duration-200"
            >
              Comenzar
            </button>
          </form>

        </article>
      </div>
    </div>
  );
};

export default Home;
