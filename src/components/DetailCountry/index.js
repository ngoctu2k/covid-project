import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
DetailCountry.propTypes = {
    
};

function DetailCountry(props) {
    const{deaths,recovered}=props
    return (
        <div className="detail-country">
            <div>
                <h4>Tử vong :{deaths}</h4>
            </div>
            <div>
                <h4>Bình phục :{recovered}</h4>
            </div>
        </div>
    );
}

export default DetailCountry;