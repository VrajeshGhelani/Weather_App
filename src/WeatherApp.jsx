import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";
import "./WeatherApp.css";
function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "surat",
    feelLike: 15.86,
    humidity: 30,
    temp: 17.29,
    maxTemp: 17.29,
    minTemp: 17.29,
    weather: "clear sky",
  });
  let updateinfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateinfo={updateinfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
