import React, {Component} from 'react';

import Section from 'components/Section';
import Code from 'components/Code/Code';

import KMPCode from '!!raw-loader!modules/KMP';

class SourceCode extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section title="KMP 实现源码">
                <Code value={KMPCode}/>
            </Section>
        );
    }
}

export default SourceCode;
