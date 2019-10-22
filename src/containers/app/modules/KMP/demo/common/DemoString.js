import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import 'scss/containers/app/modules/KMP/demo/common/DemoString.scss';

class DemoString extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {title, value, offset, isCharActivated} = this.props;

        return value ?
            <div className="demo-string">

                <div className="demo-string-title">
                    {title}
                </div>

                <div className="demo-string-content"
                     style={{paddingLeft: offset && !isNaN(offset) ? offset * 64 : null}}>
                    {
                        value.split('').map((char, index) =>
                            <div key={index}
                                 className={classNames('demo-char', {
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

DemoString.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    offset: PropTypes.number,
    isCharActivated: PropTypes.func
};

export default DemoString;
