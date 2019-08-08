import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Loading from 'alcedo-ui/CircularLoading';
import TargetImage from '../TargetImage';

import Util from 'vendors/Util';

class AsyncImage extends Component {

    constructor(props) {

        super(props);

        this.state = {
            loaded: false
        };

    }

    preload = async (src = this.props.src) => {

        await Util.delay(4000);

        const image = new Image();
        image.onload = () => this.setState({
            loaded: true
        });
        image.src = src;

    };

    componentDidMount() {
        this.preload();
    }

    render() {

        const {src} = this.props,
            {loaded} = this.state;

        return loaded ?
            <TargetImage src={src}/>
            :
            <Loading/>;

    }
}

AsyncImage.propTypes = {
    src: PropTypes.string
};

export default AsyncImage;
