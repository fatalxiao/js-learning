import React from 'react';

import HOC from './hoc';
import LazySuspense from './lazySuspense';

function ReactSuspense() {
    return (
        <div>

            <p>Use HOC:</p>
            <HOC/>

            <p>Use Suspense</p>
            <LazySuspense/>

        </div>
    );
}

export default ReactSuspense;
