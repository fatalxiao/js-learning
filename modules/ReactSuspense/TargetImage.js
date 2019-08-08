import React from 'react';
import PropTypes from 'prop-types';

function TargetImage(props) {
    return (
        <img style={{
            width: '100%',
            padding: 8
        }}
             alt="Target Image"
             src={props.src}/>
    );
}

TargetImage.propTypes = {
    src: PropTypes.string
};

export default TargetImage;
