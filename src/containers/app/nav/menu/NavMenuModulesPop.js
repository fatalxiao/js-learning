import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';
import Popover from 'alcedo-ui/Popover';
import PatientList from './NavMenuModules';

import 'scss/containers/app/nav/menu/NavMenuModulesPop.scss';

class NavMenuModulesPop extends Component {

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
            <div className="nav-menu-modules-pop-wrapper">

                <IconButton ref="allPatientButton"
                            className="nav-menu-modules-pop-trigger"
                            iconCls="icon-list"
                            onMouseOver={() => this.allPatientMouseHandler(true)}/>

                <Popover className="nav-menu-modules-pop"
                         visible={isFold && popVisible}
                         triggerEl={this.allPatientButtonEl}
                         position={Popover.Position.RIGHT_TOP}
                         hasTriangle={false}
                         onRequestClose={() => this.allPatientMouseHandler(false)}>
                    <PatientList/>
                </Popover>

            </div>
        );
    }
}

NavMenuModulesPop.propTypes = {
    isFold: PropTypes.bool,
    routerPush: PropTypes.func
};

export default connect(state => ({}), dispatch => bindActionCreators({
    routerPush: actions.routerPush
}, dispatch))(NavMenuModulesPop);
