import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import FlatButton from 'alcedo-ui/FlatButton';
import Modules from './NavMenuModules';

import 'scss/containers/app/nav/menu/NavMenuModulesList.scss';

class NavMenuModulesList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-menu-modules-list">

                <FlatButton className="all-modules-button"
                            value="All Modules"
                            iconCls="icon-list">
                </FlatButton>

                <Modules/>

            </div>
        );
    }
}

NavMenuModulesList.propTypes = {
    routerPush: PropTypes.func
};

export default connect(state => ({}), dispatch => bindActionCreators({
    routerPush: actions.routerPush
}, dispatch))(NavMenuModulesList);
