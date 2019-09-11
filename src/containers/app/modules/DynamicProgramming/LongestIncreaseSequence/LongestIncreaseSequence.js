import React, {Component} from 'react';

import Code from 'components/Code/Code';

import value from '!!raw-loader!modules/DynamicProgramming/LongestIncreaseSequence/LongestIncreaseSequence';

class LongestIncreaseSequence extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Code value={value}/>
        );
    }
}

export default LongestIncreaseSequence;
