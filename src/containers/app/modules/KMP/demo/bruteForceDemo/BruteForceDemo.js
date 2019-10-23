import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'alcedo-ui/RaisedButton';
import DemoStringGroup from '../common/DemoStringGroup';

import {search} from 'modules/KMP/BruteForce4Demo';

import 'scss/containers/app/modules/KMP/demo/bruteForceDemo/BruteForceDemo.scss';

class BruteForceDemo extends Component {

    constructor(props) {

        super(props);

        this.step = search(props.txt, props.pat);

        this.state = {
            currentState: null
        };

    }

    init = () => {
        this.step = search(this.props.txt, this.props.pat);
        this.setState({
            currentState: null
        });
    };

    next = () => {
        this.setState({
            currentState: this.step.next()
        });
    };

    render() {

        const {txt, pat} = this.props,
            {currentState} = this.state;

        console.log('currentState::', currentState && currentState.value);

        return (
            <div className="brute-force-demo">

                <div className="brute-force-demo-title">
                    暴力算法
                </div>

                <DemoStringGroup txt={txt}
                                 pat={pat}
                                 currentState={currentState && currentState.value}/>

                <RaisedButton value="Reset"
                              iconCls="icon-ccw"
                              onClick={this.init}/>

                <RaisedButton value="Next"
                              rightIconCls="icon-controller-play"
                              disabled={currentState && currentState.value && currentState.value[1] === pat.length - 1}
                              onClick={this.next}/>

            </div>
        );

    }
}

BruteForceDemo.propTypes = {
    txt: PropTypes.string,
    pat: PropTypes.string
};

export default BruteForceDemo;
