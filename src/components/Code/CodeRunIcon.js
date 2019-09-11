import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from 'alcedo-ui/IconButton';

class CodeRunIcon extends Component {

    constructor(props) {
        super(props);
    }

    run = () => {
        const {value} = this.props;
        value && console.log(eval(value));
    };

    render() {
        return (
            <IconButton className="code-toolbar-icon"
                        iconCls={'icon-controller-play'}
                        onClick={this.run}/>
        );
    }
}

CodeRunIcon.propTypes = {
    value: PropTypes.string
};

export default CodeRunIcon;
