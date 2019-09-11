import React, {Component, Fragment} from 'react';

import Code from 'components/Code/Code';

import LongestIncreaseSequenceCode from '!!raw-loader!modules/DynamicProgramming/LongestIncreaseSequence/LongestIncreaseSequence';
import LongestIncreaseSequenceRecursionCode from '!!raw-loader!modules/DynamicProgramming/LongestIncreaseSequence/LongestIncreaseSequenceRecursion';
import LongestIncreaseSequenceRecursionAdvancedCode from '!!raw-loader!modules/DynamicProgramming/LongestIncreaseSequence/LongestIncreaseSequenceRecursionAdvanced';
import LongestIncreaseSequenceRecursionAdvancedWithCacheCode from '!!raw-loader!modules/DynamicProgramming/LongestIncreaseSequence/LongestIncreaseSequenceRecursionAdvancedWithCache';

class LongestIncreaseSequence extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Code value={LongestIncreaseSequenceCode}/>
                <Code value={LongestIncreaseSequenceRecursionCode}/>
                <Code value={LongestIncreaseSequenceRecursionAdvancedCode}/>
                <Code value={LongestIncreaseSequenceRecursionAdvancedWithCacheCode}/>
            </Fragment>
        );
    }
}

export default LongestIncreaseSequence;
