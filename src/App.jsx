import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MainComponent from "./components/MainComponent";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getGradientClass = (temp) => {
    if (temp < 0) return "from-blue-200 to-blue-400";
    if (temp < 15) return "from-sky-200 to-sky-400";
    if (temp < 25) return "from-yellow-100 to-yellow-300";
    if (temp < 35) return "from-orange-200 to-orange-400";
    return "from-red-300 to-red-500";
  };

  const fetchWeather = async (lat, lon) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed To Fetch Weather Data");
    const data = await response.json();
    return data.current_weather;
  };

  const fetchCoords = async (cityName) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      cityName
    )}&count=1`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed To Fetch Location Data");
    const data = await response.json();
    if (!data.results?.length) throw new Error("City Not Found");
    const { latitude, longitude, name } = data.results[0];
    return { latitude, longitude, name };
  };

  const handleSearch = async (query) => {
    setError("");
    setWeather(null);
    setCity(query);

    try {
      const { latitude, longitude, name } = await fetchCoords(query);
      const currentWeather = await fetchWeather(latitude, longitude);
      setCity(name);
      setWeather({
        temp: currentWeather.temperature,
        windSpeed: currentWeather.windspeed,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const gradient = weather
    ? getGradientClass(weather.temp)
    : "from-white to-gray-200";

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center bg-gradient-to-b ${gradient} space-y-6 px-4 sm:px-6 lg:px-8 transition-all duration-500`}
    >
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 text-sm sm:text-base">{error}</p>}
      <MainComponent city={city} weather={weather} gradient={gradient} />
    </div>
  );
}

export default App;
