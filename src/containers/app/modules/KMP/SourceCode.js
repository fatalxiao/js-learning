import React, {Component} from 'react';

import Section from 'components/Section';
import Code from 'components/Code/Code';

import KMPCode from '!!raw-loader!modules/KMP/KMP';
import KMPAdvanceCode from '!!raw-loader!modules/KMP/KMPAdvanced';

class SourceCode extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section title="KMP 实现源码">
                <Code title="原版 KMP 算法"
                      value={KMPCode}/>
                <Code title="改进的 KMP 算法"
                      value={KMPAdvanceCode}/>
            </Section>
        );
    }
}

export default SourceCode;
