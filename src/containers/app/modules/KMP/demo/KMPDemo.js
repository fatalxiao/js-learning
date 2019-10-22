import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'alcedo-ui/RaisedButton';
import KMPDemoStringGroup from './KMPDemoStringGroup';

import KMP4Demo from 'modules/KMP/KMP4Demo';

import 'scss/containers/app/modules/KMP/demo/KMPDemo.scss';

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

                <KMPDemoStringGroup txt={txt}
                                    pat={pat}
                                    currentState={currentState && currentState.value}/>

                <RaisedButton value="Reset"
                              onClick={this.init}/>

                <RaisedButton value="Next"
                              disabled={currentState && currentState.value && currentState.value[1] === pat.length}
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
