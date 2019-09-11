import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CodeArea from './CodeArea';

import 'scss/components/Code/Code.scss';

class Code extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {data} = this.props;

        return (
            <CodeArea data={data}/>
        );

    }
}

Code.propTypes = {
    data: PropTypes.any
};

export default Code;
