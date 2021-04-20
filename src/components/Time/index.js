import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import"./time.css"

Time.propTypes = {};
function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}
function Time(props) {
  const [currentTime, setCurrentTime] = useState();
  const today = new Date();
  console.log(today);
  const year = today.getFullYear();
  const mounth = today.getMonth();
  const day = today.getDay();
  const date = today.getDate()
  console.log(date);
  useEffect(() => {
    const getCrurrentTime = setInterval(function () {
      const today = new Date();
      setCurrentTime(formatDate(today));
    }, 1000);
    return () => {
      clearInterval(getCrurrentTime);
    };
  }, []);
  return (
    <div className="current-time">
      <div> {currentTime}</div>
      <div>
        Thứ {day + 1} ngày {date} tháng {mounth + 1} năm {year}
      </div>
    </div>
  );
}

export default Time;
