import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'scss/components/Code/CodeTitle.scss';

class CodeTitle extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {data} = this.props;

        return (
            <h2 className="code-title">
                {data}
            </h2>
        );

    }
}

CodeTitle.propTypes = {
    data: PropTypes.any
};

export default CodeTitle;
