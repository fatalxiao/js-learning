import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';
// import NavSearch from './NavSearch';

import {DEFAULT_ROUTE} from 'src/config.routes';

import 'scss/containers/app/nav/bar/NavBarTop.scss';

class NavBarTop extends Component {

    constructor(props) {

        super(props);

        this.state = {
            searchDrawerVisible: false
        };

    }

    goToLanding = () => {
        this.props.routerPush(DEFAULT_ROUTE);
    };

    toggleSearch = () => {
        this.setState({
            searchDrawerVisible: !this.state.searchDrawerVisible
        });
    };

    // hideSearch = () => {
    //     this.setState({
    //         searchDrawerVisible: false
    //     });
    // };

    render() {

        const {children, isFold} = this.props,
            {searchDrawerVisible} = this.state;

        return (
            <div className={classNames('nav-bar-top', {
                fold: isFold,
                'search-drawer-visible': searchDrawerVisible
            })}>

                <IconButton className="nav-bar-item nav-bar-logo-button"
                            onClick={this.goToLanding}>
                    <div className="logo"/>
                    <div className="logo-animated"/>
                </IconButton>

                {/*<IconButton className="nav-bar-item nav-bar-search-button"*/}
                {/*            iconCls={searchDrawerVisible ? 'icon-reply' : 'icon-magnifying-glass'}*/}
                {/*            tip={searchDrawerVisible ? 'Back' : 'Search'}*/}
                {/*            tipPosition={IconButton.TipPosition.RIGHT}*/}
                {/*            onClick={this.toggleSearch}/>*/}

                {/*<NavSearch visible={searchDrawerVisible}*/}
                {/*           onRequestClose={this.hideSearch}/>*/}

                {children}

            </div>
        );

    }
}

NavBarTop.propTypes = {

    isFold: PropTypes.bool,

    routerPush: PropTypes.func

};

export default connect(state => ({}), dispatch => bindActionCreators({
    routerPush: actions.routerPush
}, dispatch))(NavBarTop);
