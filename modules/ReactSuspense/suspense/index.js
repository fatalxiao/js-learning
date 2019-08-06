import React, {Component, lazy, Suspense} from 'react';

import Loading from 'alcedo-ui/CircularLoading';

import Util from 'vendors/Util';

// const TargetComponent = lazy(() => import('../TargetComponent'));

const TargetComponent = lazy(async () => {
    await Util.delay(4000);
    return import('../TargetComponent');
});

class ReactSuspense extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Suspense fallback={<Loading/>}>
                <TargetComponent/>
            </Suspense>
        );
    }
}

export default ReactSuspense;
