import React from "react";

export default function Forecast(props) {
  const { getWeather, getWeatherIcon } = props;
  return (
    <div className="forecast">
      <div>
        {getWeather !== undefined && getWeather.main.temp !== undefined
          ? { getWeatherIcon }
          : ``}
      </div>
      <div>
        {getWeather !== undefined && getWeather.main.temp !== undefined
          ? `City:${getWeather.name}
  Temperature:
  ${Math.round(getWeather.main.temp - 273.15)}`
          : `City not found`}
      </div>
    </div>
  );
}
