import React from "react";

export default function WeatherDisplay(props) {
  return (
    <div>
      <p>
        <span style={{ color: `${props.temperature > 20 ? "red" : "blue"}` }}>
          {props.temperature}
        </span>
      </p>
      <p>{props.conditions}</p>
    </div>
  );
}
