import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MaterialProvider from 'alcedo-ui/MaterialProvider';

import 'scss/components/DisplayField.scss';

class DisplayField extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, label, children, ...restProps} = this.props;

        return (
            <MaterialProvider {...restProps}
                              className={classNames('display-field', {
                                  [className]: className
                              })}
                              label={label}
                              isLabelAnimate={false}
                              useSeparator={false}>
                <div className="display-field-content">
                    {children}
                </div>
            </MaterialProvider>
        );
    }
}

DisplayField.propTypes = {

    children: PropTypes.any,

    className: PropTypes.string,
    label: PropTypes.string

};

export default DisplayField;
