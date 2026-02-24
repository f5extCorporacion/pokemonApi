import CardPoke from "./CardPoke";

const PokemoList = ({ pokemosProp }) => {
  return (
    <div className="w-full mt-10">

      {/* GRID MODERNO RESPONSIVE */}
      <div className="
        grid 
        gap-10 
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        justify-items-center
      ">
        {pokemosProp.map((poke) => (
          <CardPoke
            key={poke.url}
            pokemonLink={poke.url}
          />
        ))}
      </div>

    </div>
  );
};

export default PokemoList;
