import React, {Component} from 'react';

import Section from 'components/Section';
import Code from 'components/Code/Code';

import MinMoneyCountRecursionCode from '!!raw-loader!modules/DynamicProgramming/MinMoneyCount/MinMoneyCountRecursion';
import MinMoneyCountRecursionWithCacheCode from '!!raw-loader!modules/DynamicProgramming/MinMoneyCount/MinMoneyCountRecursionWithCache';
import MinMoneyCountCode from '!!raw-loader!modules/DynamicProgramming/MinMoneyCount/MinMoneyCount';

class MinMoneyCount extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section title="用最少的钞票">
                <Code title="1. 递归实现"
                      value={MinMoneyCountRecursionCode}/>
                <Code title="2. 递归实现，并带缓存"
                      value={MinMoneyCountRecursionWithCacheCode}/>
                <Code title="3. 动态规划实现"
                      value={MinMoneyCountCode}/>
            </Section>
        );
    }
}

export default MinMoneyCount;
