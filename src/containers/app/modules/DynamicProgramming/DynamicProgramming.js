import React, {Component} from 'react';

import LongestIncreaseSequence from './LongestIncreaseSequence/LongestIncreaseSequence';

class DynamicProgramming extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LongestIncreaseSequence/>
            </div>
        );
    }
}

export default DynamicProgramming;
