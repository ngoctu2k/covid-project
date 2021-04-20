import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../redux/covidSlice";
Search.propTypes = {};

function Search(props) {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const value = e.target.value
    const action = searchCountry(value);
    dispatch(action);
  };
  return (
    <form className="search">
      <div className="button-src">
        <span><i className="fas fa-search"></i></span>
      </div>
      <input
        type="text"
        placeholder="Search 667 regions..."
        onChange={handleSearch}
      />
    </form>
  );
}

export default Search;
