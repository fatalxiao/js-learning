import React, {Component} from 'react';

import KMPDemo from './KMPDemo/KMPDemo';
import BruteForceDemo from './bruteForceDemo/BruteForceDemo';
import Section from 'components/Section';

import 'scss/containers/app/modules/KMP/demo/Demos.scss';

class Demos extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section className="kmp-demos"
                     title="暴力算法 VS KMP算法">

                <BruteForceDemo txt="aaaaaaab"
                                pat="aaab"/>

                <KMPDemo txt="aaaaaaab"
                         pat="aaab"/>

                <div className="kmp-demos-hr"/>

                <BruteForceDemo txt="aaacaaab"
                                pat="aaab"/>

                <KMPDemo txt="aaacaaab"
                         pat="aaab"/>

            </Section>
        );
    }
}

export default Demos;
