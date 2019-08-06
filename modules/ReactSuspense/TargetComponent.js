import React, {Component} from 'react';

class TargetComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                height: 200,
                background: '#ddd',
                padding: 20
            }}>
                Target Component
            </div>
        );
    }
}

export default TargetComponent;
