import React, {lazy} from 'react';

function preload() {
    return new Promise()
}

export default lazy(async () => {
    preload()
    return import('./TargetImage');
});
