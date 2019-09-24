import React, {Component} from 'react';

import Section from 'components/Section';
import Code from 'components/Code/Code';

import LongestIncreaseSequenceRecursionCode from '!!raw-loader!modules/DynamicProgramming/LongestIncreaseSequence/LongestIncreaseSequenceRecursion';
import LongestIncreaseSequenceRecursionAdvancedCode from '!!raw-loader!modules/DynamicProgramming/LongestIncreaseSequence/LongestIncreaseSequenceRecursionAdvanced';
import LongestIncreaseSequenceRecursionAdvancedWithCacheCode from '!!raw-loader!modules/DynamicProgramming/LongestIncreaseSequence/LongestIncreaseSequenceRecursionAdvancedWithCache';
import LongestIncreaseSequenceCode from '!!raw-loader!modules/DynamicProgramming/LongestIncreaseSequence/LongestIncreaseSequence';

class LongestIncreaseSequence extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section title="最长上升序列">
                <Code title="1. 递归实现"
                      value={LongestIncreaseSequenceRecursionCode}/>
                <Code title="2. 递归实现，改进版，传递索引"
                      value={LongestIncreaseSequenceRecursionAdvancedCode}/>
                <Code title="3. 递归实现，改进版，传递索引，并添加缓存"
                      value={LongestIncreaseSequenceRecursionAdvancedWithCacheCode}/>
                <Code title="4. 动态规划实现"
                      value={LongestIncreaseSequenceCode}/>
            </Section>
        );
    }
}

export default LongestIncreaseSequence;
