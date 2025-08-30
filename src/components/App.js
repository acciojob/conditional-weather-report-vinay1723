import React, { useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  // Hardcoded weather input
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });

  return (
    <div>
      <WeatherDisplay
        temperature={weather.temperature}
        conditions={weather.conditions}
      />
    </div>
  );
};

export default App;
