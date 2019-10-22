import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import eventOn from 'dom-helpers/events/on';
import eventOff from 'dom-helpers/events/off';

import IconButton from 'alcedo-ui/IconButton';

import ComponentUtil from 'vendors/ComponentUtil';
import Event from 'vendors/Event';

import 'scss/components/Section.scss';

class Section extends Component {

    constructor(props) {

        super(props);

        this.section = createRef();

        this.state = {
            collapsed: props.collapsed,
            isTitleFixed: false,
            isTitleFixedBottom: false,
            width: null
        };

    }

    /**
     * toggle section collapse / expand
     */
    toggle = () => {

        const {collapsed} = this.state,
            state = {
                collapsed: !collapsed
            };

        if (!collapsed) {
            state.isTitleFixed = false;
            state.isTitleFixedBottom = false;
            state.width = null;
        }

        this.setState(state, () => {
            Event.fireEvent(document, 'scroll');
        });

    };

    handleScroll = () => {

        if (!this.section || !this.section.current) {
            return;
        }

        // if collapsed, set fixed false
        if (this.state.collapsed && this.state.isTitleFixed) {
            this.setState({
                isTitleFixed: false,
                isTitleFixedBottom: false,
                width: null
            });
            return;
        }

        const rect = this.section.current.getBoundingClientRect(),
            isTitleFixed = rect.top <= 0;
        this.setState({
            isTitleFixed,
            isTitleFixedBottom: rect.height + rect.top <= 96,
            width: isTitleFixed ? rect.width - 2 : null
        });

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
            {collapsed, isTitleFixed, isTitleFixedBottom, width} = this.state;

        return (
            <section ref={this.section}
                     className={classNames('section', {
                         expand: !collapsed,
                         'title-fixed': isTitleFixed,
                         'title-fixed-bottom': isTitleFixedBottom
                     })}>

                <h1 className="section-title"
                    style={{width}}
                    onClick={this.toggle}>
                    {title}
                    <IconButton className="section-toggle-buton"
                                iconCls="icon-chevron-down"/>
                </h1>

                <div className="section-content">
                    {children}
                </div>

                <div className="section-expand-border"></div>

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
