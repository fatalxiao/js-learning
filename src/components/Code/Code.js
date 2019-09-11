import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import CodeArea from './CodeArea';
import CodeEditor from './CodeEditor';
import FullScreenIcon from './CodeFullScreenIcon';

import 'scss/components/Code/Code.scss';

class Code extends Component {

    constructor(props) {

        super(props);

        this.wrapper = createRef();
        this.wrapperEl = null;

    }

    toggleFullScreen = () => {
        const {toggleFullScreen} = this.props;
        toggleFullScreen && toggleFullScreen(this.wrapperEl);
    };

    componentDidMount() {
        this.wrapperEl = this.wrapper && this.wrapper.current;
    }

    render() {

        const {data} = this.props;

        return (
            <div ref={this.wrapper}
                 className="code">

                <CodeEditor data={data}/>

                <FullScreenIcon onClick={this.toggleFullScreen}/>

            </div>
        );

    }
}

Code.propTypes = {

    data: PropTypes.any,

    toggleFullScreen: PropTypes.func

};

export default connect(state => ({}), dispatch => bindActionCreators({
    toggleFullScreen: actions.toggleFullScreen
}, dispatch))(Code);
