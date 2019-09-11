import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import 'scss/components/Code/CodeEditor.scss';

class CodeArea extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {value, isFullScreen, onChange} = this.props;

        return (
            <AceEditor className="code-editor"
                       mode="javascript"
                       theme="monokai"
                       width="100%"
                       height={isFullScreen ? '100%' : value.split(/\r?\n/).length * 19}
                       value={value}
                       fontSize={14}
                       showPrintMargin={false}
                       showGutter={true}
                       highlightActiveLine={true}
                       setOptions={{
                           enableBasicAutocompletion: true,
                           enableLiveAutocompletion: true,
                           enableSnippets: true,
                           showLineNumbers: true,
                           tabSize: 4
                       }}
                       onChange={onChange}/>
        );
    }
}

CodeArea.propTypes = {

    value: PropTypes.string,
    isFullScreen: PropTypes.bool,

    onChange: PropTypes.func

};

export default connect(state => ({
    isFullScreen: state.fullScreen.isFullScreen
}), dispatch => bindActionCreators({}, dispatch))(CodeArea);
