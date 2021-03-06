import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import NavBarTop from './NavBarTop';
import NavBarBottom from './NavBarBottom';
import NavBarMenu from './NavBarMenu';

import 'scss/containers/app/nav/bar/NavBar.scss';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {isFold} = this.props;

        return (
            <div className={classNames('nav-bar', {
                fold: isFold
            })}>

                <NavBarTop isFold={isFold}/>

                <NavBarMenu isFold={isFold}/>

                <NavBarBottom/>

            </div>
        );
    }
}

NavBar.propTypes = {
    isFold: PropTypes.bool
};

export default NavBar;
