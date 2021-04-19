import React from "react";
import { useSelector } from "react-redux";
import DetailCountry from "../DetailCountry";

function ListCountry(props) {
  const { listCountry } = props;
  const state = useSelector((state) => state.covid);
  const { key } = state;
  const VietNam = listCountry.find((x) => x.country == "Vietnam");
  let listCountryFilter = listCountry.filter(
    (x) => x?.country?.toLowerCase().indexOf(key.toLowerCase()) >= 0
  );
  listCountryFilter.sort((a, b) => b.cases - a.cases);
  const tenCountry = listCountryFilter.slice(0, 10);
  return (
    <div>
      <ul className="list-country">
        {!key && (
          <DetailCountry key={VietNam?.country} country={VietNam} index={0} />
        )}
        {tenCountry &&
          tenCountry.map((country, index) => {
            return (
              <li>
                <DetailCountry
                  key={country?.country}
                  country={country}
                  index={!key ? index + 1 : index}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ListCountry;
