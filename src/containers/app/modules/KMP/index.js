import React, {Component, Fragment} from 'react';

import Demos from './demo/Demos';
import SourceCode from './SourceCode';

class KMP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Demos/>
                <SourceCode/>
            </Fragment>
        );
    }
}

export default KMP;
