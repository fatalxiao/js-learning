import React, {Component} from 'react';
import PropTypes from 'prop-types';

import KMPDemoString from './KMPDemoString';

import 'scss/containers/app/modules/KMP/demo/KMPDemoStringGroup.scss';

class KMPDemoStringGroup extends Component {

    constructor(props) {
        super(props);
    }

    getTextPosition = () => {
        const {currentState} = this.props;
        return currentState ? currentState[0] : -1;
    };

    getPatPosition = () => {
        const {currentState} = this.props;
        return currentState ? currentState[1] - 1 : -1;
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
            <div className="kmp-demo-string-group">
                <KMPDemoString title="Text"
                               value={txt}
                               isCharActivated={this.isTxtCharActivated}/>
                <KMPDemoString title="Pat"
                               value={pat}
                               offset={this.getTextPosition() - this.getPatPosition()}
                               isCharActivated={this.isPatCharActivated}/>
            </div>
        );

    }
}

KMPDemoStringGroup.propTypes = {

    txt: PropTypes.string,
    pat: PropTypes.string,

    currentState: PropTypes.array

};

export default KMPDemoStringGroup;
