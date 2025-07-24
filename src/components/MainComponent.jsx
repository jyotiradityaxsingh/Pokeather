import React from "react";

function MainComponent({ city, weather, gradient }) {
  let pokemon = {
    name: "Eevee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  };

  if (weather) {
    const { temp, weatherCode } = weather;

    const isRainy = [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode);
    const isSnowy = [71, 73, 75, 77, 85, 86].includes(weatherCode);

    if (isRainy) {
      pokemon = {
        name: "Squirtle",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      };
    } else if (isSnowy || temp < 5) {
      pokemon = {
        name: "Snorunt",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
      };
    } else if (temp > 30) {
      pokemon = {
        name: "Charmander",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      };
    }
  }

  return (
    <div
      className={`w-full max-w-4xl rounded-xl h-80 bg-gradient-to-b ${gradient} shadow-2xl mx-auto p-5 transition-all duration-500`}
    >
      {/* Top */}
      <div className="flex justify-between text-xl text-gray-500 font-medium mx-2">
        <p>{city || "City"}</p>
        <div className="flex space-x-5">
          <p>{new Date().toLocaleDateString()}</p>
          <p>
            {new Date()
              .toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
              })
              .toUpperCase()}
          </p>
        </div>
      </div>

      {/* Middle */}
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="text-5xl font-bold tracking-normal text-neutral-700">
          {weather ? `${weather.temp}°C` : "--"}
        </h1>
        <p className="text-md text-gray-600 mt-1">Current Weather</p>
      </div>

      {/* Bottom */}
      <div className="flex justify-center items-center space-x-10 mt-3">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#B83EFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h8.5a2.5 2.5 0 1 0-2.34-3.24M3 12h15.5a2.5 2.5 0 1 1-2.34 3.24M4 16h5.5a2.5 2.5 0 1 1-2.34 3.24"
            />
          </svg>
          <p className="text-neutral-700 text-sm">
            {weather ? `${weather.windSpeed} km/h` : "--"}
          </p>
        </div>
      </div>
      {/* Pokémon Display */}
      <div className="flex flex-col items-center mt-4">
        <img src={pokemon.image} alt={pokemon.name} className="w-30 h-30" />
      </div>
    </div>
  );
}

export default MainComponent;
