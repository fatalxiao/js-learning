import React, {Component} from 'react';

import KMPDemo from './KMPDemo/KMPDemo';
import BruteForceDemo from './bruteForceDemo/BruteForceDemo';
import Section from 'components/Section';

class Demo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section title="KMP算法 VS 暴力算法">

                <KMPDemo txt="aaaaaaab"
                         pat="aaab"/>

                <BruteForceDemo txt="aaaaaaab"
                                pat="aaab"/>

                <KMPDemo txt="aaacaaab"
                         pat="aaab"/>

                <BruteForceDemo txt="aaacaaab"
                                pat="aaab"/>

            </Section>
        );
    }
}

export default Demo;
