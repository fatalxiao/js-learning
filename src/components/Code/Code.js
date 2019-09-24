import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import Title from './CodeTitle';
import Editor from './CodeEditor';
import Toolbar from './CodeToolbar';

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

        const {title} = this.props,
            {value} = this.state;

        return (
            <div className="code">

                {
                    title ?
                        <Title data={title}/>
                        :
                        null
                }

                <div ref={this.wrapper}
                     className="code-content">
                    <Editor value={value}
                            onChange={this.handleChange}/>
                    <Toolbar value={value}
                             wrapperEl={this.wrapperEl}
                             onToggleFullScreen={this.toggleFullScreen}/>
                </div>

            </div>
        );

    }
}

Code.propTypes = {

    title: PropTypes.any,
    value: PropTypes.any,

    toggleFullScreen: PropTypes.func

};

export default connect(state => ({}), dispatch => bindActionCreators({
    toggleFullScreen: actions.toggleFullScreen
}, dispatch))(Code);
