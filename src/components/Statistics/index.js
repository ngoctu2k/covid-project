import React from "react";
import FormatNumber from "../FormatNumber";
import './style.css';
Statistics.propTypes = {};


function Statistics(props) {
   const{totalCases,totalDeaths,totalRecovered} = props
  return ( 
    <div className="statistics">
      <h1 className="statistics-total"><FormatNumber number={totalCases}/></h1>
      <div className="statistics-detail">
        <div >
          <h3><FormatNumber number={totalDeaths}/></h3>
          <p>TỬ VONG</p>
        </div>
        <div>
          <h3><FormatNumber number={totalRecovered}/></h3>
          <p>ĐÃ CHỮA KHỎI</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
