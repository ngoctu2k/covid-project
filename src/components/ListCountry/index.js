import React from "react";
import { useSelector } from "react-redux";
import DetailCountry from "../DetailCountry";
import ItemCountry from "../ItemCountry";

function ListCountry(props) {
  const { listCountry } = props;
  const state = useSelector((state) => state.covid);
  const { key } = state;
  const VietNam = listCountry.find((x) => x.country == "Vietnam");
  let listCountryFilter = listCountry.filter(
    (x) => x?.country?.toLowerCase().indexOf(key.toLowerCase()) >= 0
  );
  listCountryFilter.sort((a, b) => b.cases - a.cases);
  const tenCountry = key?listCountryFilter.slice(0, 10):listCountryFilter.slice(0, 9)
  return (
    <div>
      <ul className="list-country">
        {!key && (
          <ItemCountry key={VietNam?.country} country={VietNam} index={0} />
        )}
        {tenCountry &&
          tenCountry.map((country, index) => {
            return (
              <li>
                <ItemCountry
                  key={country?.country}
                  country={country}
                  index={!key ? index + 1 : index}
                />
                {key && <DetailCountry deaths={country.deaths}  recovered={country.recovered}/>} 
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ListCountry;
