import React, {Component, lazy, Suspense} from 'react';

import Loading from 'alcedo-ui/CircularLoading';
import TargetImage from './TargetImage';

import Util from 'vendors/Util';

// const TargetComponent = lazy(() => import('../TargetComponent'));
const TargetComponent = lazy(async () => {
    await Util.delay(4000);
    return import('../TargetComponent');
});

class LazySuspense extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Suspense fallback={<Loading/>}>
                <div>
                    <TargetComponent/>
                </div>
                <div>
                    <TargetImage
                        src="https://raw.githubusercontent.com/alcedo-ui/alcedo-ui/master/examples/assets/images/intro-bg.jpg"/>
                </div>
            </Suspense>
        );
    }
}

export default LazySuspense;
