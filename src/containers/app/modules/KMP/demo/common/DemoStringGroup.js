import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DemoString from './DemoString';

class DemoStringGroup extends Component {

    constructor(props) {
        super(props);
    }

    getTextPosition = () => {
        const {currentState} = this.props;
        return currentState ? currentState[0] : -1;
    };

    getPatPosition = () => {
        const {currentState} = this.props;
        return currentState ? currentState[1] : -1;
    };

    isTxtCharActivated = index => {
        const textPosition = this.getTextPosition(),
            patPosition = this.getPatPosition();
        return index <= textPosition && index >= textPosition - patPosition;
    };

    isPatCharActivated = index => {
        const patPosition = this.getPatPosition();
        return index <= patPosition;
    };

    render() {

        const {txt, pat} = this.props;

        return (
            <div className="demo-string-group">
                <DemoString title="Text"
                            value={txt}
                            isCharActivated={this.isTxtCharActivated}/>
                <DemoString title="Pat"
                            value={pat}
                            offset={this.getTextPosition() - this.getPatPosition()}
                            isCharActivated={this.isPatCharActivated}/>
            </div>
        );

    }
}

DemoStringGroup.propTypes = {

    txt: PropTypes.string,
    pat: PropTypes.string,

    currentState: PropTypes.array

};

export default DemoStringGroup;
