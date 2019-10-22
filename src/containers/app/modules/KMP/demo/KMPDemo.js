import React, {Component, Fragment} from 'react';

import RaisedButton from 'alcedo-ui/RaisedButton';
import KMPDemoStringGroup from './KMPDemoStringGroup';

import KMPDemoClass from 'modules/KMP/demo';

class KMPDemo extends Component {

    constructor(props) {

        super(props);

        this.txt = 'aaaaaaab';
        this.pat = 'aaab';

        this.kmp = new KMPDemoClass(this.pat);
        this.step = this.kmp.search(this.txt);

        this.state = {
            currentState: null
        };

    }

    init = () => {
        this.step = this.kmp.search(this.txt);
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

        const {currentState} = this.state;

        return (
            <Fragment>

                <KMPDemoStringGroup txt={this.txt}
                                    pat={this.pat}
                                    currentState={currentState && currentState.value}/>

                <RaisedButton value="Reset"
                              onClick={this.init}/>

                <RaisedButton value="Next"
                              disabled={currentState && currentState.value && currentState.value[1] === this.pat.length}
                              onClick={this.next}/>

            </Fragment>
        );

    }
}

export default KMPDemo;
