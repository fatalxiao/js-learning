import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconButton from 'alcedo-ui/IconButton';
import Drawer from 'alcedo-ui/Drawer';

import 'scss/containers/app/nav/bar/NavBarDrawer.scss';

class NavBarDrawer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, style, visible, showModal, onRequestClose} = this.props;

        return (
            <Drawer className={classNames('nav-bar-drawer', {
                [className]: className
            })}
                    style={style}
                    visible={visible}
                    showModal={showModal}
                    onRequestClose={onRequestClose}>

                {children}

                <IconButton className="nav-bar-drawer-exit-button"
                            iconCls="fas fa-arrow-left"
                            onClick={onRequestClose}/>

            </Drawer>
        );
    }
}

NavBarDrawer.propTypes = {

    children: PropTypes.any,

    className: PropTypes.string,
    style: PropTypes.object,

    visible: PropTypes.bool,
    showModal: PropTypes.bool,
    onRequestClose: PropTypes.func

};

NavBarDrawer.defaultProps = {
    visible: false,
    showModal: true
};

export default NavBarDrawer;
