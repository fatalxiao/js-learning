import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import IconButton from 'alcedo-ui/IconButton';

import 'scss/components/Code/CodeFullScreenIcon.scss';

class CodeFullScreenIcon extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {isFullScreen, onToggleFullScreen} = this.props;

        return (
            <IconButton className="code-toolbar-icon code-full-screen-icon"
                        iconCls={isFullScreen ? 'icon-resize-100' : 'icon-resize-full-screen'}
                        onClick={onToggleFullScreen}/>
        );

    }
}

CodeFullScreenIcon.propTypes = {
    isFullScreen: PropTypes.bool,
    onToggleFullScreen: PropTypes.func
};

export default connect(state => ({
    isFullScreen: state.fullScreen.isFullScreen
}), dispatch => bindActionCreators({}, dispatch))(CodeFullScreenIcon);
