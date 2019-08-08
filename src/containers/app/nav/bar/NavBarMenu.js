import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';
import Popover from 'alcedo-ui/Popover';
import NavMenuModules from '../menu/NavMenuModules';

import 'scss/containers/app/nav/bar/NavBarMenu.scss';

class NavBarMenu extends Component {

    constructor(props) {

        super(props);

        this.state = {
            popVisible: false
        };

    }

    allPatientMouseHandler = popVisible => {
        this.setState({
            popVisible
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
                            onMouseOver={() => this.allPatientMouseHandler(true)}/>

                <Popover className="nav-bar-menu-pop"
                         visible={isFold && popVisible}
                         triggerEl={this.allPatientButtonEl}
                         position={Popover.Position.RIGHT_TOP}
                         hasTriangle={false}
                         onRequestClose={() => this.allPatientMouseHandler(false)}>
                    <NavMenuModules/>
                </Popover>

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
