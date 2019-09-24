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
                <Code title="1. 最长上升序列"
                      value={LongestIncreaseSequenceCode}/>
                <Code title="2. 最长上升序列递归实现"
                      value={LongestIncreaseSequenceRecursionCode}/>
                <Code title="3. 最长上升序列递归实现，改进版，传递索引"
                      value={LongestIncreaseSequenceRecursionAdvancedCode}/>
                <Code title="4. 最长上升序列递归实现，改进版，传递索引，并添加缓存"
                      value={LongestIncreaseSequenceRecursionAdvancedWithCacheCode}/>
            </Fragment>
        );
    }
}

export default LongestIncreaseSequence;
