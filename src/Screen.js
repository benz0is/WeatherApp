import React, { useEffect, useState } from "react";
import "./App.css";
import Results from "./Results";
import debesuota from "./weather/debesuota.png";
import lietus from "./weather/lietus.png";
import sniegas from "./weather/sniegas.png";
import sunny from "./weather/sunny.png";
import vėjas from "./weather/vėjas.png";
import žaibas_lietus from "./weather/žaibas_lietus.png";

export default function Screen() {
  const MY_API = "&appid=c7f04dbd75b7fb62c161c6b53211d25d";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
  const [currentWeather, setCurrentWeather] = useState();
  const [getWeather, getCurrentWeather] = useState();
  const [getWeatherIcon, setWeatherIcon] = useState();

  const SetTheIcon = () => {
    if (getWeather !== undefined) {
      switch (getWeather.weather[0].main) {
        case "Clear":
          return setWeatherIcon(<img src={sunny}></img>);
        case "Clouds":
          return setWeatherIcon(<img src={debesuota}></img>);
        case "Rain":
          return setWeatherIcon(<img src={lietus}></img>);
        case "Snow":
          return setWeatherIcon(<img src={sniegas}></img>);
        case "Thunderstorm":
          return setWeatherIcon(<img src={žaibas_lietus}></img>);
        case "Windy":
          return setWeatherIcon(<img src={vėjas}></img>);
        default:
          return "";
      }
    }
  };
  return (
    <div>
      <div className="header">
        <input
          type="text"
          placeholder="Enter a city"
          className="input_search"
          onChange={(e) => {
            setCurrentWeather(e.target.value);
          }}
        />
        <input
          type="button"
          value="search"
          className="input_button"
          onClick={() => {
            fetch(`${BASE_URL}${currentWeather}${MY_API}`)
              .then((res) => res.json())
              .then((data) => getCurrentWeather(data))
              .then(console.log(getWeather));
            SetTheIcon();
          }}
        ></input>
        <img src=""></img>
      </div>
      <div className="results">
        <Results
          getWeather={getWeather}
          getWeatherIcon={getWeatherIcon}
        ></Results>
      </div>
    </div>
  );
}
