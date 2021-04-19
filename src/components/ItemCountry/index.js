import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
ItemCountry.propTypes = {
    
};

function ItemCountry(props) {
    const{country,index} = props
    return (
        <div className="item-country">
            <div>
                <span>{index+1}</span>
                <img className="national-flag" src={country?.countryInfo.flag} alt=""/>
            </div>
            <div>
                <h3>{country?.country}</h3>
                <p>33 minutes ago </p>
            </div>
            <div>
                <h4>{country?.cases}</h4>
            </div>
        </div>
    );
}

export default ItemCountry;