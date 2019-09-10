import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';
import Drawer from './NavBarDrawer';
import ModuleList from '../menu/NavMenuModulesList';

import 'scss/containers/app/nav/bar/NavBarMenu.scss';

class NavBarMenu extends Component {

    constructor(props) {

        super(props);

        this.state = {
            popVisible: false
        };

    }

    showDrawer = () => {
        this.setState({
            popVisible: true
        });
    };

    hideDrawer = () => {
        this.setState({
            popVisible: false
        });
    };

    render() {

        const {isFold} = this.props,
            {popVisible} = this.state;

        return (
            <div className="nav-bar-menu">

                <IconButton className="nav-bar-menu-trigger"
                            iconCls="icon-list"
                            onClick={this.showDrawer}/>

                <Drawer className="nav-bar-menu-drawer"
                        visible={isFold && popVisible}
                        onRequestClose={this.hideDrawer}>
                    <ModuleList onRequestClose={this.hideDrawer}/>
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
