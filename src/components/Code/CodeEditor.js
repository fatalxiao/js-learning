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

        const {data, isFullScreen} = this.props;

        return (
            <AceEditor className="code-editor"
                       mode="javascript"
                       theme="monokai"
                       width="100%"
                       height={isFullScreen ? '100%' : 600}
                       value={data}
                       fontSize={14}
                       showPrintMargin={true}
                       showGutter={true}
                       highlightActiveLine={true}
                       setOptions={{
                           enableBasicAutocompletion: true,
                           enableLiveAutocompletion: true,
                           enableSnippets: true,
                           showLineNumbers: true,
                           tabSize: 4
                       }}
                       onChange={this.changeHandler}
                       onScroll={this.editorScrollHandler}/>
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
