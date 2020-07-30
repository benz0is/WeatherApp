import React from "react";
import "./App.css";

export default function Results(props) {
  const { getWeather, getWeatherIcon } = props;

  return (
    <div className="forecast">
      <div>{getWeatherIcon}</div>
      <div>
        {getWeather !== undefined && getWeather.main.temp !== undefined
          ? `City:${getWeather.name}
      Temperature:
      ${Math.round(getWeather.main.temp - 273.15)}`
          : ``}
      </div>
    </div>
  );
}
