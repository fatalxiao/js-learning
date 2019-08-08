import React, {lazy, Suspense} from 'react';

import Loading from 'alcedo-ui/CircularLoading';

import Util from 'vendors/Util';

// const TargetComponent = lazy(() => import('../TargetComponent'));
const TargetComponent = lazy(async () => {
    await Util.delay(2000);
    return import('../TargetComponent');
});

function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(src);
        image.onerror = () => resolve(src);
        image.src = src;
    });
}

const IMAGE_SRC = 'https://raw.githubusercontent.com/alcedo-ui/alcedo-ui/master/examples/assets/images/intro-bg.jpg22',
    TargetImage = lazy(async () => {
        await Util.delay(4000);
        await preloadImage(IMAGE_SRC);
        return import('../TargetImage');
    });

function LazySuspense() {
    return (
        <Suspense fallback={<Loading/>}>
            <div>
                <TargetComponent/>
            </div>
            <div>
                <TargetImage src={IMAGE_SRC}/>
            </div>
        </Suspense>
    );
}

export default LazySuspense;
