import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import FormatNumber from '../FormatNumber';
ItemCountry.propTypes = {
    
};

function ItemCountry(props) {
    const{country,index,active} = props
    return (
        <div className={`item-country ${active?"active":""}`}>
            <div className="item-country-left">
                <span className="number-index">{index+1}</span>
                <img className="national-flag" src={country?.countryInfo.flag} alt=""/>
            </div>
            <div className="item-country-center">
                <h3>{country?.country}</h3>
                <p>3 minutes ago </p>
            </div>
            <div className="item-country-right">
                <h4><FormatNumber number={country?.cases}/></h4>
            </div>
        </div>
    );
}

export default ItemCountry;