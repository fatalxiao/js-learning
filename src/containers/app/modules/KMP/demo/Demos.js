import React, {Component} from 'react';

import BaseKMPDemo from './baseKMPDemo/BaseKMPDemo';
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

                <BaseKMPDemo txt="aaaaaaab"
                             pat="aaab"/>

                <div className="kmp-demos-hr"/>

                <BruteForceDemo txt="aaacaaab"
                                pat="aaab"/>

                <BaseKMPDemo txt="aaacaaab"
                             pat="aaab"/>

                <div className="kmp-demos-hr"/>

                <BruteForceDemo txt="abcdefg"
                                pat="def"/>

                <BaseKMPDemo txt="abcdefg"
                             pat="def"/>

            </Section>
        );
    }
}

export default Demos;
