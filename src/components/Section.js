import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'scss/components/Section.scss';

class Section extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, title} = this.props;

        return (
            <section className="section">
                <h1 className="section-title">{title}</h1>
                {children}
            </section>
        );
    }
}

Section.propTypes = {
    children: PropTypes.any,
    title: PropTypes.any
};

export default Section;
