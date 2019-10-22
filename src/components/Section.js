import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import eventOn from 'dom-helpers/events/on';
import eventOff from 'dom-helpers/events/off';

import IconButton from 'alcedo-ui/IconButton';

import ComponentUtil from 'vendors/ComponentUtil';

import 'scss/components/Section.scss';

class Section extends Component {

    constructor(props) {

        super(props);

        this.section = createRef();

        this.state = {
            collapsed: props.collapsed,
            isTitleFixed: false
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

    handleScroll = () => {

        if (!this.section || !this.section.current) {
            return;
        }

        const isTitleFixed = this.section.current.getBoundingClientRect().top <= 0;
        if (this.state.isTitleFixed !== isTitleFixed) {
            this.setState({
                isTitleFixed
            });
        }

    };

    componentDidMount() {
        eventOn(document, 'scroll', this.handleScroll);
    }

    componentWillUnmount() {
        eventOff(document, 'scroll', this.handleScroll);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            collapsed: ComponentUtil.getDerivedState(props, state, 'collapsed')
        };
    }

    render() {

        const {children, title} = this.props,
            {collapsed, isTitleFixed} = this.state;

        return (
            <section ref={this.section}
                     className={classNames('section', {
                         expand: !collapsed,
                         'title-fixed': isTitleFixed
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
