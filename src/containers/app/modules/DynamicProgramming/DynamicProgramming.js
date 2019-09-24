import React, {Component} from 'react';

import LongestIncreaseSequence from './LongestIncreaseSequence';
import MinMoneyCount from './MinMoneyCount';

class DynamicProgramming extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LongestIncreaseSequence/>
                <MinMoneyCount/>
            </div>
        );
    }
}

export default DynamicProgramming;
