import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import covidApi from "./api/covidApi";
import "./assets/styles/reset.css";
import ListCountry from "./components/ListCountry";
import Search from "./components/Search";
import Statistics from "./components/Statistics";
import { getAllAsyncThunk } from "./redux/covidSlice";
function formatNumber(number) {
  return String(number).replace(/(.)(?=(\d{3})+$)/g, "$1,");
}
function App() {
  const state = useSelector((state) => state.covid);
  const [totalCases, setTotalCases] = useState(0);
  const [totalDeaths, setTotalDeath] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const { listCountry, loading } = state;
  console.log(1);
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
  useEffect(() => {
    const action = getAllAsyncThunk();
    dispatch(action);
    // setInterval(function(){
    //   dispatch(action)
    // }, 60000*3);
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Statistics
          totalCases={formatNumber(totalCases)}
          totalDeaths={formatNumber(totalDeaths)}
          totalRecovered={formatNumber(totalRecovered)}
        />
        <Search />
        <ListCountry listCountry={listCountry} />
      </div>
    </div>
  );
}

export default App;
