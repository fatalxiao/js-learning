import React from 'react';

import HOC from 'modules/ReactSuspense/hoc';
import LazySuspense from 'modules/ReactSuspense/lazySuspense';

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