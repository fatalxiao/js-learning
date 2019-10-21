import React, {Component, Fragment} from 'react';

import LongestIncreaseSequence from './LongestIncreaseSequence';
import MinMoneyCount from './MinMoneyCount';
import PackageMaxValue from './PackageMaxValue';

class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <LongestIncreaseSequence/>
                <MinMoneyCount/>
                <PackageMaxValue/>
            </Fragment>
        );
    }
}

export default Index;
