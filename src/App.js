import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./assets/styles/reset.css";
import ListCountry from "./components/ListCountry";
import Search from "./components/Search";
import Statistics from "./components/Statistics";
import { getAllAsyncThunk } from "./redux/covidSlice";
import "./App.css";
import React from "react";
import Time from "./components/Time";
import Weather from "./components/Weather";

function App() {
  const state = useSelector((state) => state.covid);
  const [totalCases, setTotalCases] = useState(0);
  const [totalDeaths, setTotalDeath] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const { listCountry, loading } = state;
  useEffect(() => {
    function gettotalCases() {
      let totalCase = 0;
      let totalDeath = 0;
      let recovered = 0;
      listCountry.forEach((x) => {
        totalCase += x.cases;
        totalDeath += x.deaths;
        recovered += x.recovered;
      });
      setTotalCases(totalCase);
      setTotalDeath(totalDeath);
      setTotalRecovered(recovered);
    }
    gettotalCases();
  }, [loading]);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const action = getAllAsyncThunk();
  //   console.log("2k");
  // }, []);
  useEffect(() => {
    const action = getAllAsyncThunk();
    dispatch(action);

    const Update = setInterval(function () {
      dispatch(action);
    }, 60000*3);
    return () => {
      clearInterval(Update);
    };
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Time/>
          <Weather/>
          <Statistics
            totalCases={totalCases}
            totalDeaths={totalDeaths}
            totalRecovered={totalRecovered}
          />
          <Search />
          <ListCountry listCountry={listCountry} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(App);
