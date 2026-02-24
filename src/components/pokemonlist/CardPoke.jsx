import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { bgByType } from "../utils/colortype";
import { BorderType } from "../utils/border";

const CardPoke = ({ pokemonLink }) => {
  const [completo, setCompleto] = useState(null);

  useEffect(() => {
    axios
      .get(pokemonLink)
      .then(({ data }) => setCompleto(data))
      .catch((err) => console.log(err));
  }, [pokemonLink]);

  if (!completo) return null;

  const mainType = completo.types[0].type.name;

  return (
    <Link
      to={`/details/${completo.id}`}
      className="relative rounded-3xl bg-[#e0e5ec] p-6 capitalize
                 transition-all duration-300
                 hover:scale-105"
      style={{
        boxShadow:
          "8px 8px 16px #bec3c9, -8px -8px 16px #ffffff",
      }}
    >
      {/* Header de color dinámico */}
      <div
        className={`absolute top-0 left-0 w-full h-28 rounded-t-3xl ${bgByType[mainType]} opacity-20`}
      />

      {/* Imagen */}
      <div className="flex justify-center -mt-16 relative z-10">
        <img
          src={
            completo.sprites.other["official-artwork"].front_default
          }
          alt={completo.name}
          className="w-40 drop-shadow-xl"
        />
      </div>

      {/* Info */}
      <div className="text-center mt-4 relative z-10">
        <h3 className="text-xl font-bold text-gray-700">
          {completo.species.name}
        </h3>

        <span className="text-sm text-gray-500">
          {completo.types
            .map((type) => type.type.name)
            .join(" / ")}
        </span>

        <h5 className="font-semibold text-gray-400 text-xs mt-4">
          Stats
        </h5>
      </div>

      {/* Stats */}
      <ul className="grid gap-3 grid-cols-2 text-sm mt-4 relative z-10">
        {completo.stats.slice(0, 4).map((stat) => (
          <li
            key={stat.stat.name}
            className="rounded-xl p-3 bg-[#e0e5ec]"
            style={{
              boxShadow:
                "inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff",
            }}
          >
            <h6 className="font-semibold text-gray-400 text-xs">
              {stat.stat.name}
            </h6>
            <span className="font-bold text-gray-700">
              {stat.base_stat}
            </span>
          </li>
        ))}
      </ul>
    </Link>
  );
};

export default CardPoke;
