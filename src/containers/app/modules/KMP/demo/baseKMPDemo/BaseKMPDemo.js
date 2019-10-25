import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'alcedo-ui/RaisedButton';
import DemoStringGroup from '../common/DemoStringGroup';

import BaseKMP4Demo from 'modules/KMP/BaseKMP4Demo';

import 'scss/containers/app/modules/KMP/demo/baseKMPDemo/BaseKMPDemo.scss';

class BaseKMPDemo extends Component {

    constructor(props) {

        super(props);

        this.kmp = new BaseKMP4Demo(props.pat);
        this.step = this.kmp.search(props.txt);

        this.state = {
            currentState: null
        };

    }

    init = () => {
        this.step = this.kmp.search(this.props.txt);
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

        currentState && console.log(currentState.value);

        return (
            <div className="base-kmp-demo">

                <h2 className="base-kmp-demo-title">
                    KMP 算法
                </h2>

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

BaseKMPDemo.propTypes = {
    txt: PropTypes.string,
    pat: PropTypes.string
};

export default BaseKMPDemo;
