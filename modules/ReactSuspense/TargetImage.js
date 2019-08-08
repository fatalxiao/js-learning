import React from 'react';
import PropTypes from 'prop-types';

function TargetImage(props) {
    return (
        <img style={{height: 200}}
             alt="Target Image"
             src={props.src}/>
    );
}

TargetImage.propTypes = {
    src: PropTypes.string
};

export default TargetImage;
