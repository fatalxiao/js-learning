import React, {Fragment} from 'react';

import asyncComponent from './AsyncComponent';
import AsyncImage from './AsyncImage';

const TargetComponent = asyncComponent(() => import('../TargetComponent'));

function ReactSuspense() {
    return (
        <Fragment>
            <TargetComponent/>
            <AsyncImage
                src="https://raw.githubusercontent.com/alcedo-ui/alcedo-ui/master/examples/assets/images/intro-bg.jpg"/>
        </Fragment>
    );
}

export default ReactSuspense;
