import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateinfo }) {
  let [City, setCity] = useState("");
  let [Error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ad60bb81d10b721771dce1dfd9ffb5ca";

  let weatherInfo = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      let res = await fetch(
        `${API_URL}?q=${City}&appid=${API_KEY}&units=metric`
      );
      let resjeson = await res.json();

      let result = {
        city: City,
        feelLike: resjeson.main.feels_like,
        humidity: resjeson.main.humidity,
        temp: resjeson.main.temp,
        maxTemp: resjeson.main.temp_max,
        minTemp: resjeson.main.temp_min,
        weather: resjeson.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let change = (evt) => {
    setCity(evt.target.value);
  };

  let submit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(City);
      setCity("");
      let newInfo = await weatherInfo();
      updateinfo(newInfo);
      setError(false);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="searchBox">
      <form onSubmit={submit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={City}
          onChange={change}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {Error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
