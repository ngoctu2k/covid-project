import React from 'react';
import PropTypes from 'prop-types';

DetailCountry.propTypes = {
    
};

function DetailCountry(props) {
    const{deaths,recovered}=props
    return (
        <div>
            <div>
                <h4>Tử vong :{deaths}</h4>
            </div>
            <div>
                <h4>bình phục :{recovered}</h4>
            </div>
        </div>
    );
}

export default DetailCountry;