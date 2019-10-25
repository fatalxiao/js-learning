import React, {Component} from 'react';

import Section from 'components/Section';
import Code from 'components/Code/Code';

import BaseKMPCode from '!!raw-loader!modules/KMP/BaseKMP';
import DPKMPCode from '!!raw-loader!modules/KMP/DPKMP';
import DPKMPAdvanceCode from '!!raw-loader!modules/KMP/DPKMPAdvanced';

class SourceCode extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section title="KMP 实现源码">
                <Code title="KMP 算法"
                      value={BaseKMPCode}/>
                <Code title="动态规划 KMP 算法"
                      value={DPKMPCode}/>
                <Code title="改进的动态规划 KMP 算法"
                      value={DPKMPAdvanceCode}/>
            </Section>
        );
    }
}

export default SourceCode;
