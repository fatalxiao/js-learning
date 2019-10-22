import React, {Component, Fragment} from 'react';

import Demo from './demo/Demo';
import SourceCode from './SourceCode';

class KMP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Demo/>
                <SourceCode/>
            </Fragment>
        );
    }
}

export default KMP;
