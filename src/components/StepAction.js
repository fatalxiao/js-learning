import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'alcedo-ui/FlatButton';
import RaisedButton from 'alcedo-ui/RaisedButton';
import Theme from 'alcedo-ui/Theme';

import 'scss/components/StepAction.scss';

class StepAction extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {isFirst, isLast, onPrev, onNext} = this.props;

        return (
            <div className="step-action">

                {
                    isFirst ?
                        null
                        :
                        <FlatButton className="previous-button"
                                    value="Previous"
                                    iconCls="icon-back"
                                    onClick={onPrev}/>
                }

                <RaisedButton className="continue-button"
                              theme={Theme.SUCCESS}
                              value={isLast ? 'DONE' : 'SAVE and CONTINUE'}
                              onClick={onNext}/>

            </div>
        );
    }
}

StepAction.propTypes = {

    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,

    onPrev: PropTypes.func,
    onNext: PropTypes.func

};

StepAction.defaultProps = {
    isFirst: false,
    isLast: false
};

export default StepAction;
