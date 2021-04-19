import React from 'react';
import PropTypes from 'prop-types';



function FormatNumber(props) {
    const{number} =props
    return    String(number).replace(/(.)(?=(\d{3})+$)/g, "$1,");
    ;
}

export default FormatNumber;