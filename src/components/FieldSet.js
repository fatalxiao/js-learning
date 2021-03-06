import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import 'scss/components/FieldSet.scss';

class FieldSet extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, title, ...restProps} = this.props;

        return (
            <div {...restProps}
                 className={classNames('field-set', {
                     [className]: className
                 })}>

                <h3 className="field-set-title">
                    {title}
                </h3>

                <div className="field-set-content">
                    {children}
                </div>

            </div>
        );
    }
}

FieldSet.propTypes = {

    children: PropTypes.any,

    className: PropTypes.string,
    title: PropTypes.string

};

export default FieldSet;
