import React, {Component} from 'react';

import Code from 'components/Code';

import data from '!!raw-loader!modules/DynamicProgramming/LongestIncreaseSequence/LongestIncreaseSequence';

class LongestIncreaseSequence extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Code data={data}/>
        );
    }
}

export default LongestIncreaseSequence;
