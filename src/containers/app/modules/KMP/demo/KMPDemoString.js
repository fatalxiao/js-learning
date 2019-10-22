import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import 'scss/containers/app/modules/KMP/demo/KMPDemoString.scss';

class KMPDemoString extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {title, value, offset, isCharActivated} = this.props;

        return value ?
            <div className="kmp-demo-string">

                <div className="kmp-demo-string-title">
                    {title}
                </div>

                <div className="kmp-demo-string-content"
                     style={{paddingLeft: offset && !isNaN(offset) ? offset * 64 : null}}>
                    {
                        value.split('').map((char, index) =>
                            <div key={index}
                                 className={classNames('kmp-demo-char', {
                                     activated: isCharActivated && isCharActivated(index)
                                 })}>
                                {char}
                            </div>
                        )
                    }
                </div>

            </div>
            :
            null;

    }
}

KMPDemoString.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    offset: PropTypes.number,
    isCharActivated: PropTypes.func
};

export default KMPDemoString;
