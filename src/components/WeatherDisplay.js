import React from "react";

export default function WeatherDisplay({ temperature, conditions }) {
  return (
    <div>
      <p>
        Temperature:{" "}
        <span style={{ color: temperature > 20 ? "red" : "blue" }}>
          {temperature}
        </span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}
