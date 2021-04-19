import React from "react";
import './style.css';
Statistics.propTypes = {};


function Statistics(props) {
   const{totalCases,totalDeaths,totalRecovered} = props
  return ( 
    <div className="statistics">
      <h1 className="statistics-total">{totalCases}</h1>
      <div className="statistics-detail">
        <div >
          <h3>{totalDeaths}</h3>
          <p>DEATHS</p>
        </div>
        <div>
          <h3>{totalRecovered}</h3>
          <p>RECOVERIES</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
