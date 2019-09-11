import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import CodeEditor from './CodeEditor';
import FullScreenIcon from './CodeFullScreenIcon';

import ComponentUtil from 'vendors/ComponentUtil';

import 'scss/components/Code/Code.scss';

class Code extends Component {

    constructor(props) {

        super(props);

        this.wrapper = createRef();
        this.wrapperEl = null;

        this.state = {
            value: props.value || ''
        };

    }

    handleChange = value => {
        this.setState({
            value
        });
    };

    toggleFullScreen = () => {
        const {toggleFullScreen} = this.props;
        toggleFullScreen && toggleFullScreen(this.wrapperEl);
    };

    componentDidMount() {
        this.wrapperEl = this.wrapper && this.wrapper.current;
    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {value} = this.state;

        return (
            <div ref={this.wrapper}
                 className="code">

                <CodeEditor value={value}
                            onChange={this.handleChange}/>

                <FullScreenIcon onClick={this.toggleFullScreen}/>

            </div>
        );

    }
}

Code.propTypes = {

    value: PropTypes.any,

    toggleFullScreen: PropTypes.func

};

export default connect(state => ({}), dispatch => bindActionCreators({
    toggleFullScreen: actions.toggleFullScreen
}, dispatch))(Code);
