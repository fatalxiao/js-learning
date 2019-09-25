import React, {Component} from 'react';

import Section from 'components/Section';
import Code from 'components/Code/Code';

import PackageMaxValueRecursionCode from '!!raw-loader!modules/DynamicProgramming/PackageMaxValue/PackageMaxValueRecursion';
import PackageMaxValueRecursionWithCacheCode from '!!raw-loader!modules/DynamicProgramming/PackageMaxValue/PackageMaxValueRecursionWithCache';
import PackageMaxValueCode from '!!raw-loader!modules/DynamicProgramming/PackageMaxValue/PackageMaxValue';

class PackageMaxValue extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section title="背包问题">
                <Code title="1. 递归实现"
                      value={PackageMaxValueRecursionCode}/>
                <Code title="2. 递归实现，并带缓存"
                      value={PackageMaxValueRecursionWithCacheCode}/>
                <Code title="3. 动态规划实现"
                      value={PackageMaxValueCode}/>
            </Section>
        );
    }
}

export default PackageMaxValue;
