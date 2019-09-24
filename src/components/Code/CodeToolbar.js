import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RunIcon from './CodeRunIcon';
import FullScreenIcon from './CodeFullScreenIcon';

import 'scss/components/Code/CodeToolbar.scss';

class CodeToolbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {value, wrapperEl, onToggleFullScreen} = this.props;

        return (
            <div className="code-toolbar">
                <RunIcon value={value}
                         wrapperEl={wrapperEl}/>
                <FullScreenIcon wrapperEl={wrapperEl}
                                onToggleFullScreen={onToggleFullScreen}/>
            </div>
        );

    }
}

CodeToolbar.propTypes = {
    value: PropTypes.string,
    wrapperEl: PropTypes.object,
    onToggleFullScreen: PropTypes.func
};

export default CodeToolbar;
