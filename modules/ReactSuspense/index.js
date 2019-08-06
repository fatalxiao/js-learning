import React, {Component} from 'react';

import HOC from './hoc';
import LazySuspense from './suspense';

class ReactSuspense extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <p>Use HOC:</p>
                <HOC/>

                <p>Use Suspense</p>
                <LazySuspense/>

            </div>
        );
    }
}

export default ReactSuspense;
