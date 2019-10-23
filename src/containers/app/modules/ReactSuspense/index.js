import React from 'react';

import Section from 'components/Section';
import HOC from 'modules/ReactSuspense/hoc';
import LazySuspense from 'modules/ReactSuspense/lazySuspense';

function ReactSuspense() {
    return (
        <Section title="HOC VS Suspense">

            <p>Use HOC:</p>
            <HOC/>

            <p>Use Suspense</p>
            <LazySuspense/>

        </Section>
    );
}

export default ReactSuspense;
