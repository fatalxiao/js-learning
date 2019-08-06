import React, {Component} from 'react';
import classNames from 'classnames';

import NavBar from './bar/NavBar';
import NavPatient from './menu/NavMenu';

import Event from 'vendors/Event';
import Valid from 'vendors/Valid';

import 'scss/containers/app/nav/Nav.scss';

class Nav extends Component {

    constructor(props) {

        super(props);

        this.navBarWidth = 64;
        this.navMenuWidth = 240;
        this.defaultWidth = this.navBarWidth + this.navMenuWidth;

        this.noMove = false;
        this.resizing = false;
        this.startWidth = null;
        this.mouseX = null;

        const navWidth = this.getNavWidth();
        this.state = {
            isDragging: false,
            navWidth,
            isNavPatientCollapsed: this.isNavPatientCollapsed(navWidth) || this.isNavPatientFold(navWidth),
            isNavPatientFold: this.isNavPatientFold(navWidth)
        };

    }

    getNavWidth = () => {
        return parseInt(localStorage.getItem('navWidth')) || this.defaultWidth;
    };

    saveNavWidth = navWidth => {
        localStorage.setItem('navWidth', navWidth);
    };

    isNavPatientCollapsed = navWidth => {
        return navWidth < this.navBarWidth * 2;
    };

    isNavPatientFold = navWidth => {
        return navWidth < this.navBarWidth + this.navMenuWidth / 3;
    };

    toggleMouseDownHandler = e => {

        e.stopPropagation();

        this.noMove = true;
        this.resizing = true;
        this.startWidth = this.state.navWidth;
        this.mouseX = e.pageX;

    };

    handleMouseMove = e => {

        e.stopPropagation();

        if (!this.resizing) {
            return;
        }

        this.noMove = false;

        const offsetX = e.pageX - this.mouseX,
            navWidth = Valid.range(this.startWidth + offsetX, this.navBarWidth);

        this.setState({
            isDragging: true,
            navWidth,
            isNavPatientCollapsed: this.isNavPatientCollapsed(navWidth),
            isNavPatientFold: false
        });

    };

    handleMouseUp = () => {

        this.resizing = false;

        const {navWidth} = this.state,
            isFold = this.isNavPatientFold(navWidth),
            newNavWidth = isFold ? this.navBarWidth : (navWidth < this.defaultWidth ? this.defaultWidth : navWidth);

        this.setState({
            isDragging: false,
            navWidth: newNavWidth,
            isNavPatientCollapsed: this.isNavPatientCollapsed(newNavWidth) || isFold,
            isNavPatientFold: isFold
        }, () => {
            this.saveNavWidth(newNavWidth);
        });

    };

    toggleNav = e => {

        if (!this.noMove) {
            return;
        }

        e.stopPropagation();

        const {navWidth} = this.state,
            isFold = navWidth !== this.navBarWidth;

        this.setState({
            navWidth: isFold ? this.navBarWidth : this.defaultWidth,
            isNavPatientCollapsed: isFold,
            isNavPatientFold: isFold
        });

    };

    componentDidMount() {
        Event.addEvent(document, 'mousemove', this.handleMouseMove);
        Event.addEvent(document, 'mouseup', this.handleMouseUp);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.handleMouseMove);
        Event.removeEvent(document, 'mouseup', this.handleMouseUp);
    }

    render() {

        const {isDragging, navWidth, isNavPatientCollapsed, isNavPatientFold} = this.state,
            collapsed = navWidth === this.navBarWidth;

        return (
            <div className={classNames('nav', {dragging: isDragging})}
                 style={{flexBasis: collapsed ? this.navBarWidth : navWidth}}>

                <div className="nav-inner"
                     style={{width: collapsed ? this.navBarWidth : navWidth}}>

                    <NavBar isCollapsed={isNavPatientCollapsed}
                            isFold={isNavPatientFold}/>

                    <NavPatient isCollapsed={isNavPatientCollapsed}
                                isFold={isNavPatientFold}/>

                    <div className="nav-resize"
                         onMouseDown={this.toggleMouseDownHandler}
                         onMouseUp={this.toggleNav}>
                        <div className={classNames('nav-toggle', {collapsed})}></div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Nav;
