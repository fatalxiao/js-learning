import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import FlatButton from 'alcedo-ui/FlatButton';
import PatientList from './NavPatientList';

import 'scss/containers/app/nav/patients/NavPatientListWrapper.scss';

class NavPatientListWrapper extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-patient-list-wrapper">

                <FlatButton className="all-patients-button"
                            value="All Patients"
                            iconCls="icon-list">
                    <span className="patients-count">[0]</span>
                </FlatButton>

                <PatientList/>

            </div>
        );
    }
}

NavPatientListWrapper.propTypes = {
    routerPush: PropTypes.func
};

export default connect(state => ({}), dispatch => bindActionCreators({
    routerPush: actions.routerPush
}, dispatch))(NavPatientListWrapper);
