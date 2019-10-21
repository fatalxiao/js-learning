import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconButton from 'alcedo-ui/IconButton';

import ComponentUtil from 'vendors/ComponentUtil';

import 'scss/components/Section.scss';

class Section extends Component {

    constructor(props) {

        super(props);

        this.state = {
            collapsed: props.collapsed
        };

    }

    /**
     * toggle section collapse / expand
     */
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            collapsed: ComponentUtil.getDerivedState(props, state, 'collapsed')
        };
    }

    render() {

        const {children, title} = this.props,
            {collapsed} = this.state;

        return (
            <section className={classNames('section', {
                expand: !collapsed
            })}>

                <h1 className="section-title">
                    {title}
                    <IconButton className="section-toggle-buton"
                                iconCls="icon-chevron-down"
                                onClick={this.toggle}/>
                </h1>

                <div className="section-content">
                    {children}
                </div>

            </section>
        );
    }
}

Section.propTypes = {

    children: PropTypes.any,
    title: PropTypes.any,

    collapsed: PropTypes.bool

};

Section.defaultProps = {
    collapsed: true
};

export default Section;
