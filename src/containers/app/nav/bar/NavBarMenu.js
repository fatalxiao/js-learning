import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';
import Popover from 'alcedo-ui/Popover';
import Drawer from 'alcedo-ui/Drawer';
import NavMenuModules from '../menu/NavMenuModules';
import ModuleList from '../menu/NavMenuModulesList';

import 'scss/containers/app/nav/bar/NavBarMenu.scss';

class NavBarMenu extends Component {

    constructor(props) {

        super(props);

        this.state = {
            popVisible: false
        };

    }

    handleMouseOver = e => {
        e.stopPropagation();
        this.setState({
            popVisible: true
        });
    };

    handleMouseOut = e => {
        e.stopPropagation();
        this.setState({
            popVisible: false
        });
    };

    componentDidMount() {
        this.allPatientButtonEl = findDOMNode(this.refs.allPatientButton);
    }

    render() {

        const {isFold} = this.props,
            {popVisible} = this.state;

        return (
            <div className="nav-bar-menu">

                <IconButton ref="allPatientButton"
                            className="nav-bar-menu-trigger"
                            iconCls="icon-list"
                            onMouseOver={this.handleMouseOver}/>

                {/*<Popover className="nav-bar-menu-pop"*/}
                {/*         visible={isFold && popVisible}*/}
                {/*         triggerEl={this.allPatientButtonEl}*/}
                {/*         position={Popover.Position.RIGHT_TOP}*/}
                {/*         hasTriangle={false}*/}
                {/*         onRequestClose={() => this.allPatientMouseHandler(false)}>*/}
                {/*    <NavMenuModules/>*/}
                {/*</Popover>*/}

                <Drawer className="nav-bar-menu-drawer"
                        visible={isFold && popVisible}
                        showModal={false}
                        parentEl={document.querySelector('.nav-inner')}
                        onMouseOut={this.handleMouseOut}>
                    <ModuleList/>
                </Drawer>

            </div>
        );
    }
}

NavBarMenu.propTypes = {
    isFold: PropTypes.bool,
    routerPush: PropTypes.func
};

export default connect(state => ({}), dispatch => bindActionCreators({
    routerPush: actions.routerPush
}, dispatch))(NavBarMenu);
