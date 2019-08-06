import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import NavMenuModulesPop from '../bar/NavBarMenu';
import NavMenuModulesList from './NavMenuModulesList';

import 'scss/containers/app/nav/menu/NavMenu.scss';

class NavMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {isCollapsed, isFold} = this.props;

        return (
            <div className={classNames('nav-menu', {
                collapsed: isCollapsed,
                fold: isFold
            })}>
                {
                    isCollapsed ?
                        <NavMenuModulesPop isFold={isFold}/>
                        :
                        <NavMenuModulesList/>
                }
            </div>
        );
    }
}

NavMenu.propTypes = {
    isCollapsed: PropTypes.bool,
    isFold: PropTypes.bool
};

export default connect(state => ({}), dispatch => bindActionCreators({}, dispatch))(NavMenu);
