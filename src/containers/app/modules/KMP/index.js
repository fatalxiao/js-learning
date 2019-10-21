import React, {Component, Fragment} from 'react';

import SourceCode from './SourceCode';

class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <SourceCode/>
            </Fragment>
        );
    }
}

export default Index;
