import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import classNames from 'classnames';

import 'highlight.js/styles/androidstudio.css';
import 'scss/components/Code/CodeArea.scss';

hljs.registerLanguage('javascript', javascript);

class CodeArea extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {data, isFullScreen} = this.props;

        return (
            <code className={classNames('javascript code-area', {
                'full-screen': isFullScreen
            })}
                  dangerouslySetInnerHTML={{__html: hljs.highlightAuto(data).value}}/>
        );
    }
}

CodeArea.propTypes = {
    data: PropTypes.string,
    isFullScreen: PropTypes.bool
};

export default connect(state => ({
    isFullScreen: state.fullScreen.isFullScreen
}), dispatch => bindActionCreators({}, dispatch))(CodeArea);
