import React, {Component, lazy, Suspense} from 'react';

import Loading from 'alcedo-ui/CircularLoading';

// const TargetComponent = lazy(() => import('../TargetComponent'));

const TargetComponent = lazy(() =>
    new Promise(resolve =>
        setTimeout(() => {
            import('../TargetComponent').then(component => resolve(component));
        }, 4000)
    )
);

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
