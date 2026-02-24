import menu from './../assets/menu.png';
import pokemon from './../assets/pokemon.png';

const Barra = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#e0e5ec] shadow-[8px_8px_16px_#c8ccd2,-8px_-8px_16px_#ffffff]">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Botón menú */}
        <button className="
          w-12 h-12 rounded-2xl 
          flex items-center justify-center
          bg-[#e0e5ec]
          shadow-[6px_6px_12px_#c8ccd2,-6px_-6px_12px_#ffffff]
          active:shadow-[inset_4px_4px_8px_#c8ccd2,inset_-4px_-4px_8px_#ffffff]
          transition-all duration-200
        ">
          <img src={menu} alt="menu" className="w-6 h-6" />
        </button>

        {/* Logo */}
        <img
          src={pokemon}
          alt="pokemon"
          className="w-40 md:w-52 drop-shadow-md"
        />

        {/* Espaciador derecho (para balance visual) */}
        <div className="w-12 h-12" />

      </div>
    </nav>
  );
};

export default Barra;
