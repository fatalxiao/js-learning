import React, {Component} from 'react';

import LongestIncreaseSequence from './LongestIncreaseSequence';
import MinMoneyCount from './MinMoneyCount';
import PackageMaxValue from './PackageMaxValue';

class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LongestIncreaseSequence/>
                <MinMoneyCount/>
                <PackageMaxValue/>
            </div>
        );
    }
}

export default Index;
