import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from 'alcedo-ui/IconButton';
import TipProvider from 'alcedo-ui/TipProvider';

class CodeRunIcon extends Component {

    constructor(props) {
        super(props);
    }

    run = () => {
        const {value} = this.props;
        value && console.log(eval(value));
    };

    render() {

        const {wrapperEl} = this.props;

        return (
            <TipProvider tipContent="Run"
                         parentEl={wrapperEl}>
                <IconButton className="code-toolbar-icon"
                            iconCls="icon-controller-play"
                            onClick={this.run}/>
            </TipProvider>
        );

    }
}

CodeRunIcon.propTypes = {
    value: PropTypes.string,
    wrapperEl: PropTypes.object
};

export default CodeRunIcon;
