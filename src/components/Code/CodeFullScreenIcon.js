import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TipProvider from 'alcedo-ui/TipProvider';
import IconButton from 'alcedo-ui/IconButton';

import 'scss/components/Code/CodeFullScreenIcon.scss';

class CodeFullScreenIcon extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {isFullScreen, wrapperEl, onToggleFullScreen} = this.props;

        return (
            <TipProvider tipContent="Full Screen"
                         parentEl={wrapperEl}>
                <IconButton className="code-toolbar-icon code-full-screen-icon"
                            iconCls={isFullScreen ? 'icon-resize-100' : 'icon-resize-full-screen'}
                            onClick={onToggleFullScreen}/>
            </TipProvider>
        );

    }
}

CodeFullScreenIcon.propTypes = {
    isFullScreen: PropTypes.bool,
    wrapperEl: PropTypes.object,
    onToggleFullScreen: PropTypes.func
};

export default connect(state => ({
    isFullScreen: state.fullScreen.isFullScreen
}), dispatch => bindActionCreators({}, dispatch))(CodeFullScreenIcon);
