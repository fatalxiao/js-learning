import React, {Component} from 'react';

import asyncComponent from './AsyncComponent';

const TargetComponent = asyncComponent(() => import('../TargetComponent'));

class ReactSuspense extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TargetComponent/>
        );
    }
}

export default ReactSuspense;
