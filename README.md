## Weather Pokémon App

A Fun And Interactive React Application That Displays Real-time Weather For A Searched City, And Shows A Pokémon That Matches The Current Weather Conditions!

## Features

- 🌍 Search Any City Worldwide
- ☁️ Get Live Weather Data (Temperature, Wind Speed)
- 🧭 Dynamic Background Gradients Based On Temperature
- 🎮 Pokémon Displayed Changes With Weather:

  - **Rainy:** Squirtle 🌧️
  - **Snowy / Cold (<5°c):** Snorunt ❄️
  - **Hot (>30°c):** Charmander 🔥
  - **Default:** Eevee 🌤️

## Demo

![App Screenshot](src\assets\App-Screenshot.png)
_Real-Time Pokémon Companion Based On Your Local Weather!_

## Tech Stack

- **React:** Frontend Framework
- **Tailwind CSS:** Styling
- **Open-Meteo API** Weather And Geocoding

## 🔧 Installation

1. **clone The Repository**

```bash
git clone https://github.com/your-username/weather-pokemon-app.git
cd weather-pokemon-app
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run The App**

```bash
npm start
```

The App Should Now Be Running At `http://localhost:3000`.

## API's Used

- [open-meteo Geocoding Api](Https://open-meteo.com/en/docs/geocoding-api)
- [open-meteo Weather Api](Https://open-meteo.com/en/docs)
- [pokéapi Sprites](Https://github.com/pokeapi/sprites)

## Project Structure

```
src/
├── components/
│   ├── MainComponent.jsx
│   └── SearchBar.jsx
├── App.jsx
└── index.js
```

## Error Handling

- Displays `"City Not Found"` If No Location Matches Your Input.
- Shows Errors When Weather Data Fails To Load.

---
