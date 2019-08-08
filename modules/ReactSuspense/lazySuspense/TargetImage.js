import React, {Component} from 'react';
import PropTypes from 'prop-types';

function TargetImage(props) {

    const {src} = props;

    return (
        <img style={{
            height: 200
        }}
             alt="Target Image"
             src={src}/>
    );

}

TargetImage.propTypes = {
    src: PropTypes.string
};

export default TargetImage;
