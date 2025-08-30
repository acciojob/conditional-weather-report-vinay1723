import React from "react";

export default function WeatherDisplay(props) {
  const { temperature, conditions } = props;

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
