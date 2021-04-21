import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

Weather.propTypes = {};

function Weather(props) {
    const[city,setCity]=useState("");
    const[weather,setWeather]=useState("");

  useEffect(() => {
    async function getLocation() {
      const urlIp = "https://api.db-ip.com/v2/free/self";
      const responIp = await fetch(urlIp);
      const dataIp = await responIp.json();
      const urlWeather = `http://api.openweathermap.org/data/2.5/find?q=${dataIp.city}&units=metric&appid=175ee68f7b4fb49e599e35935579d98b`;
      const responWeather = await fetch(urlWeather)
      const dataWeather = await responWeather.json();
      setCity(dataIp.city)
      setWeather(dataWeather.list[0].main.temp)
    }
    getLocation();
  },[]);

  return <div>
      {city}: {weather}°C
  </div>;
}

export default Weather;
