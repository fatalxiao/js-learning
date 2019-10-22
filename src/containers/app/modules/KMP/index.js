import React, {Component, Fragment} from 'react';

import KMPDemo from './demo/KMPDemo';
import SourceCode from './SourceCode';

class KMP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>

                <KMPDemo txt="aaaaaaab"
                         pat="aaab"/>

                <KMPDemo txt="aaacaaab"
                         pat="aaab"/>

                <SourceCode/>

            </Fragment>
        );
    }
}

export default KMP;
