import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'alcedo-ui/RaisedButton';
import DemoStringGroup from '../common/DemoStringGroup';

import KMP4Demo from 'modules/KMP/KMP4Demo';

import 'scss/containers/app/modules/KMP/demo/KMPDemo/KMPDemo.scss';

class KMPDemo extends Component {

    constructor(props) {

        super(props);

        this.kmp = new KMP4Demo(props.pat);
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

        return (
            <div className="kmp-demo">

                <h2 className="kmp-demo-title">
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

KMPDemo.propTypes = {
    txt: PropTypes.string,
    pat: PropTypes.string
};

export default KMPDemo;
